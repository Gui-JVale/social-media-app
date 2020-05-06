import { gql } from 'apollo-boost';

// User Queries
export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    currentUser {
      id
      username
      picture
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

//= ============================
// CLIENT QUERIES
//= ============================
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
