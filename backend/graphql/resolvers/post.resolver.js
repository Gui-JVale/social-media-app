import { AuthenticationError, UserInputError } from 'apollo-server-express';

import Post from '../../models/post.model';

const postResolvers = {
  Query: {
    posts: async () =>{
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
    createPost: async (_root, { body, image }, context) => {
      try {
        const user = await context.getUser();
        if(!user) {
          throw new AuthenticationError("You must be logged in to do that!")
        }
        const post = await Post.create({
          body,
          image,
          author: {
            id: user._id,
            username: user.username,
            profilePicture: user.picture
          },
          createdAt: new Date()
        })
        user.posts.push(post);
        await user.save();
        return post;

      } catch(e) {
        throw new Error(e)
      }
    },
    deletePost: async (_, { postId }, context) => {
      const user = await context.getUser();
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
    likePost: async (_, { postId }, context) => {
      try {
        const { username } = context.getUser();
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

