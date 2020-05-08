import { UserInputError, AuthenticationError } from "apollo-server-express";

import User from "../../models/user.model";
import {
  validateCreateUserInput,
  validateLoginInput,
} from "../../utils/validators";

import bcrypt from "bcryptjs";

const userResolvers = {
  User: {
    unreadNotificationsCount: (user) =>
      user.notifications.filter(({ read }) => !read).length,
  },

  Query: {
    users: async () => {
      try {
        const posts = await User.find();
        return posts;
      } catch (e) {
        throw new Error(err);
      }
    },

    currentUser: async (_, __, context) => await context.getUser(),

    getNotifications: async (_, __, context) =>
      await context.getUser().notifications,

    getUserById: async (_, { userId }) => {
      try {
        const user = await User.findById(userId).populate("posts");
        if (user) return user;
        throw new Error("User not found");
      } catch (err) {
        throw new Error(err);
      }
    },
  },

  Mutation: {
    login: async (_parent, { username, password }, context) => {
      try {
        const { errors, valid } = validateLoginInput(username, password);
        if (!valid) {
          throw new UserInputError("Errors", { errors });
        }
        const { user } = await context.authenticate("graphql-local", {
          username,
          password,
        });
        await context.login(user);
        return user;
      } catch (e) {
        throw new Error(e);
      }
    },

    logout: (_, __, context) => context.logout(),

    followUser: async (_parent, { userToFollowId }, context) => {
      try {
        const currentUser = context.getUser();
        if (!currentUser)
          throw new AuthenticationError("You must be logged in to do that");
        if (currentUser._id === userToFollowId)
          throw new Error("Can not follow yourself mate!");

        const { username } = currentUser;

        const userToFollow = await User.findById(userToFollowId);
        if (userToFollow) {
          if (
            userToFollow.followers.find(
              (follower) => follower.username === username
            )
          ) {
            // If already follows, unfollow user. Remove from followers and following
            userToFollow.followers = userToFollow.followers.filter(
              (follower) => follower.username !== username
            );
            currentUser.following = currentUser.following.filter(
              (follower) => follower.username !== userToFollow.username
            );
          } else {
            // If it does not follow, follow user and notify him
            userToFollow.followers.push({
              id: currentUser._id,
              username,
            });
            currentUser.following.push({
              id: userToFollowId,
              username: userToFollow.username,
            });

            userToFollow.notifications.push({
              actionType: "NEW_FOLLOWER",
              read: false,
              createdAt: new Date().toISOString(),
              targetId: currentUser.id,
              author: {
                id: currentUser.id,
                username: currentUser.username,
                profilePicture: currentUser.picture,
              },
            });
          }
        }
        await currentUser.save();
        await userToFollow.save();

        return userToFollow;
      } catch (e) {
        throw new Error(e);
      }
    },

    markNotificationsAsRead: async (_, __, context) => {
      try {
        const currentUser = await context.getUser();
        const { notifications } = currentUser;
        if (!currentUser)
          throw new AuthenticationError("You must be logged in to do that");
        await User.updateMany(
          { _id: currentUser.id },
          { $set: { "notifications.$[].read": true } },
          { multi: true }
        );
        await currentUser.save();
        return notifications;
      } catch (e) {
        console.log(e);
      }
    },

    editBio: async (_, { bio }, context) => {
      try {
        const user = await context.getUser();
        if (!user)
          throw new AuthenticationError("You must be logged in to do that");
        await user.updateOne({ bio });
        await user.save();
        return user;
      } catch (e) {
        throw new Error(e);
      }
    },

    editProfilePicture: async (_, { imgUrl }, context) => {
      try {
        const user = await context.getUser();
        if (!user)
          throw new AuthenticationError("You must be logged in to do that");
        await user.updateOne({ picture: imgUrl });
        await user.save();
        return user;
      } catch (e) {
        throw new Error(e);
      }
    },

    createUser: async (
      _,
      {
        createUserInput: {
          username,
          firstName,
          lastName,
          email,
          password,
          picture,
          confirmPassword,
        },
      }
    ) => {
      try {
        // Validate Data
        const { valid, errors } = validateCreateUserInput(
          username,
          email,
          password,
          confirmPassword
        );
        if (!valid) {
          throw new UserInputError("Errors", { errors });
        }
        // Check if username already exists
        const user = await User.findOne({ username });
        if (user) {
          throw new UserInputError("Username already exists", {
            errors: {
              username: "This username is taken",
            },
          });
        }

        // Encrypt Password
        const salt = await bcrypt.genSaltSync(10);
        const hash = await bcrypt.hashSync(password, salt);

        // Create User
        const newUser = new User({
          username,
          firstName,
          lastName,
          picture,
          email,
          notifications: [],
          bio: "",
          password: hash,
          createdAt: new Date(),
        });

        const res = await newUser.save();
        return res;
      } catch (e) {
        throw new Error() * e;
      }
    },
  },
};

export default userResolvers;
