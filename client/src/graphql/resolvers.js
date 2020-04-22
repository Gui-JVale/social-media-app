import { gql } from 'apollo-boost';
import { GET_CURRENT_USER } from './queries';

export const typeDefs = gql`
  extend type Post {
    dropdownHidden: Boolean!
    isLikedByCurrentUser: Boolean!
  }

  extend type Comment {
    dropdownHidden: Boolean!
  }

  extend type User {
    isFollowedByCurrentUser: Boolean!
  }
`;


export const resolvers = {
  Post: {
    dropdownHidden: () => true,
    isLikedByCurrentUser: (post, _args, { cache }) => {
      const { currentUser } = cache.readQuery({ query: GET_CURRENT_USER });
      if (!currentUser) return false;

      return !!post.likes.find((user) => user.username === currentUser.username);
    },
  },
  User: {
    isFollowedByCurrentUser: (user, _args, { cache }) => {
      const { currentUser } = cache.readQuery({ query: GET_CURRENT_USER });
      if (!currentUser) return false;

      return !!user.followers.find((follower) => follower.username === currentUser.username);
    },
  },
  Comment: {
    dropdownHidden: () => true,
  },

  Mutation: {
    togglePostDropdownHidden: (_parent, variables, { cache, getCacheKey }) => {
      const id = getCacheKey({ __typename: 'Post', id: variables.id });
      const fragment = gql`
        fragment dropdownHidden on Post {
          dropdownHidden
        }
      `;
      const postFragment = cache.readFragment({ fragment, id });
      const data = { ...postFragment, dropdownHidden: !postFragment.dropdownHidden };
      cache.writeData({ id, data });
      return data.dropdownHidden;
    },
    toggleCommentDropdownHidden: (_parent, variables, { cache, getCacheKey }) => {
      const id = getCacheKey({ __typename: 'Comment', id: variables.id });
      const fragment = gql`
        fragment dropdownHidden on Comment {
          dropdownHidden
        }
      `;
      const commentFragment = cache.readFragment({ fragment, id });
      const data = { ...commentFragment, dropdownHidden: !commentFragment.dropdownHidden };
      cache.writeData({ id, data });
      return data.dropdownHidden;
    },
  },
};
