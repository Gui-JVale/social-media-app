import { UserInputError, AuthenticationError } from "apollo-server-express";

import Post from "../../models/post.model";
import Comment from "../../models/comment.model";
import User from "../../models/user.model";

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
          // If post exists, create comment and notify author
          const postAuthor = await User.findById(post.author.id);
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

          // Notify post author
          postAuthor.notifications.push({
            actionType: "COMMENTED_POST",
            read: false,
            createdAt: new Date().toISOString(),
            targetId: post.id,
            author: {
              id: user._id,
              username: user.username,
              profilePicture: user.picture,
            },
          });

          await postAuthor.save();

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
