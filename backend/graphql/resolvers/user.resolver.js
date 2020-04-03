import { UserInputError } from 'apollo-server-express';

import User from '../../models/user.model'
import { validateCreateUserInput, validateLoginInput } from '../../utils/validators';


import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const generateToken = user => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    }, 
    process.env.JWT_KEY, 
    { expiresIn: 3600 } 
  )
}

const userResolvers = {
  Query: {
    getUsers: async () =>{
      try {
       const posts = await User.find()
        return posts
      } catch(e) {
        throw new Error(err)
      }
    }  
  },
  Mutation: {
    login: async (_, {username, password }) => {
      const {errors, valid } = validateLoginInput(username, password);

      if(!valid) {
        throw new UserInputError('Errors', { errors })
      }

      const user = await User.findOne({ username });

      if(!user) {
        errors.general = "User not found";
        throw new UserInputError('User not found', { errors });
      };

      const match = await bcrypt.compare(password, user.password);
      if(!match) {
        errors.general = "Wrong credentials";
        throw new UserInputError('Wrong credentials', { errors });
      };

      const token = generateToken(user);

      return {
        ...user._doc,
        id: user._id,
        token
      }

    },
    createUser: async (_, {
      createUserInput: { 
        username, 
        firstName, 
        lastName, 
        email, 
        password, 
        confirmPassword 
      }
    }) => {
      try {
        // Validate Data
        const { valid, errors } = validateCreateUserInput(username, email, password, confirmPassword);
        if(!valid) {
          throw new UserInputError('Errors', { errors })
        }

        // Check if username already exists
        const user = await User.findOne({ username });
        if (user) {
          throw new UserInputError('Username already exists', {
            errors: {
              username: "This username is taken"
            }
          });
        };

        // Encrypt Password
        password = await bcrypt.hash(password, 12);
  
        // Create User
        const newUser = new User({
          username, 
          firstName, 
          lastName, 
          email, 
          password,
          createdAt: new Date().toISOString()
        });

        const res = await newUser.save();
  
        // JWT Token
        const token = generateToken(res);
  
        return {
          ...res._doc,
          id: res._id,
          token
        };
      } catch(e) {
        throw new Error*(e)
      }

    },
  }

};

export default userResolvers;
