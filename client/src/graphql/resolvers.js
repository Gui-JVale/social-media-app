import { gql } from 'apollo-boost';
import { GET_CURRENT_USER } from './queries';

export const typeDefs = gql`
  extend type Mutation {
    SetCurrentUser(userId: ID!): User!
  }
`;


export const resolvers = {
  Mutation: {
    setCurrentUser: (_parent, { user }, { cache }) => {
      cache.writeQuery({
        query: GET_CURRENT_USER,
        data: { currentUser: user }
      })
    }
  }
}