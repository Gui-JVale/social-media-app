import userResolvers from "./resolvers/user.resolver";
import postResolvers from "./resolvers/post.resolver";
import commentResolvers from "./resolvers/comments.resolver";
import appResolvers from "./resolvers/app.resolver";

const resolvers = {
  SearchResult: {
    ...appResolvers.SearchResult,
  },
  User: {
    ...userResolvers.User,
  },

  Post: {
    ...postResolvers.Post,
  },

  Query: {
    ...userResolvers.Query,
    ...postResolvers.Query,
    ...appResolvers.Query,
  },

  Mutation: {
    ...userResolvers.Mutation,
    ...postResolvers.Mutation,
    ...commentResolvers.Mutation,
  },
};

export default resolvers;
