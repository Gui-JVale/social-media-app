import { UserInputError, AuthenticationError } from 'apollo-server-express';

import User from '../../models/user.model'
import { validateCreateUserInput, validateLoginInput } from '../../utils/validators';

import bcrypt from 'bcryptjs';

const userResolvers = {
  Query: {
    users: async () => {
      try {
       const posts = await User.find()
        return posts
      } catch(e) {
        throw new Error(err)
      }
    },
    currentUser: async  (_, __, context) => await context.getUser(),
    getUserById: async (_, { userId }) => {
      try {
        const user = await User.findById(userId).populate("posts");
        if(user) return user;
        throw new Error("User not found");
      } catch(err) {
        throw new Error(err)
      }
    }
  },
  Mutation: {
    login: async (_parent, { username, password }, context) => {
      try {
        const { errors, valid } = validateLoginInput(username, password);
        if (!valid) {
          throw new UserInputError('Errors', { errors })
        }
        const { user } = await context.authenticate('graphql-local', { username, password });
        await context.login(user);
        return user;
      }catch(e) {
        throw new Error(e)
      }
    },
    followUser: async (_parent, { userToFollowId }, context ) => {
      try {
        const currentUser = context.getUser();
        if(!currentUser) throw new AuthenticationError('You must be logged in to do that')
        if(currentUser._id === userToFollowId) throw new Error('Can not follow yourself mate!');

        const { username } = currentUser;
        
        const userToFollow = await User.findById(userToFollowId);
        if(userToFollow) {
          if(userToFollow.followers.find(follower => follower.username === username )) {
            userToFollow.followers = userToFollow.followers.filter(follower => follower.username !== username);
          } else {
            userToFollow.followers.push({
              id: currentUser._id,
              username,
            });
            currentUser.following.push({
              id: userToFollowId,
              username: userToFollow.username
            });
          }
        } 
        await currentUser.save();
        await userToFollow.save();

        return userToFollow;

      } catch(e) {
        throw new Error(e);
      }

    },
    logout: (_, __, context) => context.logout(),
    createUser: async (_, {
      createUserInput: { 
        username, 
        firstName, 
        lastName, 
        email, 
        password, 
        picture,
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
        const salt = await bcrypt.genSaltSync(10)
        const hash = await  bcrypt.hashSync(password , salt)

        // Create User
        const newUser = new User({
          username, 
          firstName, 
          lastName, 
          picture,
          email, 
          password: hash,
          createdAt: new Date(),

        });

        const res = await newUser.save();
        return res;

      } catch(e) {
        throw new Error*(e)
      }

    },
  }

};

export default userResolvers;
