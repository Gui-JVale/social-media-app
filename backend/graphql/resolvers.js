import userResolvers from './resolvers/user.resolver';
import postResolvers from './resolvers/post.resolver';
import commentResolvers from './resolvers/comments.resolver';

const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...postResolvers.Query,

  },
  Mutation: {
    ...userResolvers.Mutation,
    ...postResolvers.Mutation,
    ...commentResolvers.Mutation
  }
}

export default resolvers;
