import { gql } from 'apollo-boost';

// User Queries
export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    currentUser {
      id
      username
      picture
      bio
      unreadNotificationsCount
    }
  }
`;

export const GET_NOTIFICATIONS = gql`
  query GetNotifications {
    getNotifications {
      actionType
      read
      targetId
      author {
        username
        profilePicture
      }
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query GetUserById($userId: ID!) {
    getUserById(userId: $userId) {
      username
      picture
      bio
      isFollowedByCurrentUser @client
      followers {
        username
        picture
      }
    }
  }
`;

// Post Queries
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
      dropdownHidden @client
      author {
        username
        profilePicture
      }
    }
  }
`;

export const GET_COMMENT_BY_ID = gql`
  query GetCommentById($commentId: ID!) {
    getCommentById(commentId: $commentId) {
      body
    }
  }
`;

// Global queries
export const GET_SEARCH_RESULTS = gql`
  query Search($filter: String!) {
    searchFilter @client @export(as: "filter")
    search(filter: $filter) {
      ... on User {
        id
        username
        picture
      }

      ... on Post {
        id
        body
        author {
          id
          username
          profilePicture
        }
      }
    }
  }
`;

//= ============================
// CLIENT QUERIES
//= ============================
export const CLIENT__GET_CURRENT_USER = gql`
  query GetCurrentUser {
    currentUser @client {
      id
      username
      picture
      bio
      unreadNotificationsCount
    }
  }
`;

export const CLIENT__GET_CURRENT_COMMENT = gql`
  query GetCurrentComment {
    currentComment @client
  }
`;

export const CLIENT__GET_NOTIFICATIONS_COUNT = gql`
  query GetNotificationsCount {
    notificationsCount @client
  }
`;

export const CLIENT__GET_SEARCH_FILTER = gql`
  query GetSearchFilter {
    searchFilter @client
  }
`;
