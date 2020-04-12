import { gql } from 'apollo-boost';

export const typeDefs = gql`
  extend type Post {
    dropdownHidden: Boolean!
  }
`;

export const resolvers = {
  Post: {
    dropdownHidden: () => true
  },

  Mutation: {
    toggleDropdownHidden: (_parent, variables, { cache, getCacheKey }) => {
      const id = getCacheKey({ __typename: 'Post', id: variables.id});
      const  fragment = gql`
        fragment dropdownHidden on Post {
          dropdownHidden
        }
      `;
      const postFragment = cache.readFragment({ fragment, id });
      const data = {...postFragment, dropdownHidden: !postFragment.dropdownHidden}
      cache.writeData({ id, data })
      return data.dropdownHidden;
    }
  }
}