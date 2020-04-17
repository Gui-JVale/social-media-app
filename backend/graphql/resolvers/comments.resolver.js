import { UserInputError, AuthenticationError } from 'apollo-server-express';

import Post from '../../models/post.model';
import Comment from '../../models/comment.model';

const commentResolvers = {
  Mutation: {
    createComment: async (_, { postId, body }, context ) => {
      try {
        const user = await context.getUser();
        if(body.trim() === '') {
          throw new UserInputError("Empty Comment"),  {
            errors: {
              body: "Comment body must not be empty"
            }
          }
        };

        const post = await Post.findById(postId)
        if (post) {
          const comment = await Comment.create({
            body,
            author: {
              id: user._id,
              username: user.username,
              profilePicture: user.picture
            }
          });
          post.comments.push(comment)
          await post.save();
          return post;
        } else {
          throw new UserInputError("Post not found")
        }

      } catch(e) {
        throw new Error(e);
      }
    },

    deleteComment: async (_, { postId, commentId }, context ) => {
      try{
        const { username } = context.getUser();
        const post = await Post.findById(postId);
        if(post) {
          const commentIndex = post.comments.findIndex(c => c.id === commentId);
          if(post.comments[commentIndex].username === username) {
            post.comments.splice(commentIndex, 1);
            await post.save();
            return post;
          } else {
            throw new AuthenticationError('Action not allowed');
          }
        } else {
          throw new Error("Post not found")
        }
        
      } catch(e) {
        throw new Error(e);
      }
    }
  }
}

export default commentResolvers;