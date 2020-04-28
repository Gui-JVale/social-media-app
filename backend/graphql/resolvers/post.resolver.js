import { AuthenticationError, UserInputError } from "apollo-server-express";

import Post from "../../models/post.model";

const postResolvers = {
  Post: {
    likesCount: (post) => post.likes.length,
    commentsCount: (post) => post.comments.length,
  },
  Query: {
    posts: async () => {
      try {
        const posts = await Post.find()
          .populate("comments")
          .sort({ createdAt: -1 });
        return posts;
      } catch (e) {
        throw new Error(err);
      }
    },
    getPostById: async (_, { postId }) => {
      try {
        const post = await Post.findById(postId);
        if (post) {
          return post;
        } else {
          throw new Error("Post not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    getPostComments: async (_, { postId }) => {
      try {
        const post = await Post.findById(postId).populate("comments");
        if (post) {
          return post.comments;
        } else {
          throw new Error("Post not found");
        }
      } catch (e) {
        throw new Error(e);
      }
    },
  },
  Mutation: {
    createPost: async (_root, { body, image }, context) => {
      try {
        const user = await context.getUser();
        if (!user) {
          throw new AuthenticationError("You must be logged in to do that!");
        }
        const post = await Post.create({
          body,
          image,
          likesCount: 0,
          commentsCount: 0,
          author: {
            id: user._id,
            username: user.username,
            profilePicture: user.picture,
          },
          createdAt: new Date(),
        });
        user.posts.push(post);
        await user.save();
        return post;
      } catch (e) {
        throw new Error(e);
      }
    },
    editPost: async (_, { postId, body }, context) => {
      try {
        const user = await context.getUser();
        const post = await Post.findById(postId);
        if (!user) {
          throw new AuthenticationError("You must be logged in to do that");
        } else if (!post) {
          throw new UserInputError("Post not found");
        } else if (user.username === post.author.username) {
          await post.updateOne({ body });
          await post.save();
          return post;
        }
      } catch (e) {
        throw new Error(e);
      }
    },
    deletePost: async (_, { postId }, context) => {
      const user = await context.getUser();
      try {
        const post = await Post.findById(postId);
        if (user.username === post.author.username) {
          await post.delete();
          return post;
        } else {
          throw new AuthenticationError("Action not Allowed");
        }
      } catch (e) {
        throw new Error(`Didn't delete post, ${e}`);
      }
    },
    likePost: async (_, { postId }, context) => {
      try {
        const user = context.getUser();

        if (!user)
          throw new AuthenticationError("You must be logged in to do that!");

        const { username, _id } = user;

        const post = await Post.findById(postId);
        if (post) {
          if (post.likes.find((like) => like.username === username)) {
            post.likes = post.likes.filter(
              (like) => like.username !== username
            );
            // post.likesCount--;
          } else {
            post.likes.push({
              id: _id,
              username,
              createdAt: new Date().toISOString(),
            });
            // post.likesCount++;
          }
          await post.save();
          return post;
        }
      } catch (e) {
        throw new UserInputError("Post not found");
      }
    },
  },
};

export default postResolvers;
