import { UserInputError, AuthenticationError } from "apollo-server-express";

import User from "../../models/user.model";
import Post from "../../models/post.model";

const appResolvers = {
  SearchResult: {
    __resolveType(obj) {
      if (obj.username) {
        return "User";
      }
      if (obj.body) {
        return "Post";
      }

      return null;
    },
  },
  Query: {
    search: async (_, { filter }, context) => {
      const regex = new RegExp(filter, "i");
      const user = await User.find({ username: regex }, "username picture id");
      const post = await Post.find({ body: regex });

      console.log(post);
      if (user && post) return [...user, ...post];
      if (user) return user;
      if (post) return post;

      return null;
    },
  },
};

export default appResolvers;
