import { UserInputError, AuthenticationError } from "apollo-server-express";

import Post from "../../models/post.model";
import Comment from "../../models/comment.model";

const commentResolvers = {
  Mutation: {
    createComment: async (_, { postId, body }, context) => {
      try {
        const user = await context.getUser();
        if (body.trim() === "") {
          throw (
            (new UserInputError("Empty Comment"),
            {
              errors: {
                body: "Comment body must not be empty",
              },
            })
          );
        }

        const post = await Post.findById(postId);
        if (post) {
          const comment = await Comment.create({
            body,
            author: {
              id: user._id,
              username: user.username,
              profilePicture: user.picture,
            },
          });
          post.comments.push(comment);
          await post.save();
          return comment;
        } else {
          throw new UserInputError("Post not found");
        }
      } catch (e) {
        throw new Error(e);
      }
    },

    editComment: async (_, { postId, commentId, body }, context) => {
      try {
        const { username } = context.getUser();
        if (!username)
          throw new AuthenticationError("You need to be logged in to do that");

        const post = await Post.findById(postId);
        if (post) {
          const comment = await Comment.findById(commentId);
          if (comment) {
            if (comment.author.username === username) {
              await comment.updateOne({ body });
              await comment.save();
              return comment;
            } else {
              throw new AuthenticationError("Your not allowed to do that");
            }
          } else {
            throw new Error("Comment not found");
          }
        } else {
          throw new Error("Post not found");
        }
      } catch (e) {
        throw new Error(e);
      }
    },

    deleteComment: async (_, { postId, commentId }, context) => {
      try {
        const { username } = context.getUser();
        const post = await Post.findById(postId);
        if (post) {
          const comment = await Comment.findById(commentId);
          if (!comment) throw new UserInputError("Comment not found");
          if (comment.author.username === username) {
            await comment.remove();
            return comment;
          } else {
            throw new AuthenticationError("Action not allowed");
          }
        } else {
          throw new Error("Post not found");
        }
      } catch (e) {
        throw new Error(e);
      }
    },
  },
};

export default commentResolvers;
