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
  query Posts {
    posts {
      id
      body
      dropdownHidden @client
      author {
        id
        username
        profilePicture
      }
    }
  }
`;

export const GET_DROPDOWN_HIDDEN = gql`
  query GetDropdownHidden($postId: ID!) {
    dropdownHidden(postId: $postId) {
      dropdownHidden @client
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
