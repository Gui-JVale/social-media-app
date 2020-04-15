import { gql } from 'apollo-boost';
import { GET_CURRENT_USER } from './queries';

export const typeDefs = gql`
  extend type Post {
    dropdownHidden: Boolean!
  }
`;


export const resolvers = {
  Post: {
    dropdownHidden: () => true,
    isLikedByCurrentUser: (post, _args, { cache }, _info ) => {
      const {currentUser} = cache.readQuery({ query: GET_CURRENT_USER } );
      if(!currentUser) return false;

      return post.likes.find(user => user.username === currentUser.username) ? true : false;
    }
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