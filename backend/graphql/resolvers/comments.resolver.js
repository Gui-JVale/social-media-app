import { UserInputError, AuthenticationError } from 'apollo-server-express';

import Post from '../../models/post.model';

const commentResolvers = {
  Mutation: {
    createComment: async (_, { postId, body }, context ) => {
      try {
        const { username } = context.getUser();
        if(body.trim() === '') {
          throw new UserInputError("Empty Comment"),  {
            errors: {
              body: "Comment body must not be empty"
            }
          }
        };

        const post = await Post.findById(postId)
        if (post) {
          post.comments.unshift({
            body,
            username,
            createdAt: new Date().toISOString()
          })
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