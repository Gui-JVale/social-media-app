import { AuthenticationError, UserInputError } from 'apollo-server-express';

import Post from '../../models/post.model';
import  checkAuth from '../../utils/check-auth';

const postResolvers = {
  Query: {
    getPosts: async () =>{
      try {
       const posts = await Post.find().sort({ createdAt: -1})
        return posts
      } catch(e) {
        throw new Error(err)
      }
    },
    getPostById: async (_, {postId}) => {
      try{
        const post = await Post.findById(postId);
        if (post) {
          return post;
        } else {
          throw new Error("Post not found")
        }
      }catch(err) {
        throw new Error(err);
      }
    }
  },
  Mutation : {
    createPost: async (_root, { body, image}, context) => {
      const user = checkAuth(context);
      const post = new Post({
        body, 
        image, 
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString()
      });
      await post.save();
      return post; 
    },
    deletePost: async (_, { postId }, context) => {
      const user = checkAuth(context);
      try {
        const post = await Post.findById(postId);
        if(user.username === post.username) {
          await post.delete();
          return "POST DELETED SUCCEFULLY"
        } else {
          throw new AuthenticationError('Action not Allowed');
        }

      } catch(e) {
        throw new Error(`Didn't delete post, ${e}`)
      }
    },
    likePost: async (_, { postId, username }, context) => {
      try {
        const { username } = checkAuth(context);
        const post = await Post.findById(postId);
        if(post) {
          if(post.likes.find(like => like.username === username)) {
            post.likes = post.likes.filter(like => like.username !== username );
          } else {
            post.likes.push({
              username,
              cretedAt: new Date().toISOString()
            });
          }
          await post.save();
          return post;
        }
      } catch(e) {
        throw new UserInputError('Post not found');
      }
    }
  }
};

export default postResolvers;

