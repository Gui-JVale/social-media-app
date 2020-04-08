import { gql } from 'apollo-boost';

export const GET_CURRENT_USER = gql`
  {
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
  {
    posts {
      id
      body
      author {
        id
        username
        profilePicture
      }
      comments {
        id
        body
        username
      }
      likes{
        username
      }
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