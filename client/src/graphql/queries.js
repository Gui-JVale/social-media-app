import { gql } from 'apollo-boost';

export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    currentUser {
      id
      username
      picture
      firstName
      lastName
    }
  }
`;

export const GET_POSTS = gql`
  query Posts {
    posts {
      id
      body
      dropdownHidden @client
      likesCount
      commentsCount
      author {
        id
        username
        profilePicture
      }
    }
  }
`;

export const GET_POST_BY_ID = gql`
  query GetPostById($postId: ID!) {
    getPostById(postId: $postId) {
      body
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query getUserById($userId: ID!) {
    getUserById (userId: $userId) {
      username
      picture
    }
  }
`;
