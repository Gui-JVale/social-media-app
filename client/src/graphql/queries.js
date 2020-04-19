import { gql } from 'apollo-boost';

export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    currentUser {
      id
      username
      picture
    }
  }
`;

export const GET_POSTS = gql`
  query Posts {
    posts {
      id
      body
      dropdownHidden @client
      isLikedByCurrentUser @client
      likesCount
      commentsCount
      likes {
        username
      }
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
      isLikedByCurrentUser @client
    }
  }
`;

export const GET_POST_COMMENTS = gql`
  query GetPostComments($postId: ID!) {
    getPostComments(postId: $postId) {
      id
      body
      author {
        username
        profilePicture
      } 
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query GetUserById($userId: ID!) {
    getUserById (userId: $userId) {
      username
      picture
      isFollowedByCurrentUser @client
      followers {
        username
        picture
      }
    }
  }
`;
