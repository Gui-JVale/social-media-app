import { gql } from 'apollo-boost';
//= ============================
// BACKEND MUTATIONS
//= ============================

// User Mutations
export const LOGIN_USER = gql`
  mutation Login($username: String, $password: String) {
    login(username: $username, password: $password) {
      id
      username
    }
  }
`;

export const FOLLOW_USER = gql`
  mutation FollowUser($userToFollowId: ID!) {
    followUser(userToFollowId: $userToFollowId) {
      id
      username
    }
  }
`;

export const MARK_NOTIFICATIONS_AS_READ = gql`
  mutation MarkNotificationsAsRead {
    markNotificationsAsRead {
      read
    }
  }
`;

// Post Mutations
export const CREATE_POST = gql`
  mutation CreatePost($body: String!) {
    createPost(body: $body, image: "img") {
      id
      body
      dropdownHidden @client
      likesCount
      author {
        id
        username
      }
    }
  }
`;

export const EDIT_POST = gql`
  mutation EditPost($postId: ID!, $body: String!) {
    editPost(postId: $postId, body: $body) {
      id
      body
      dropdownHidden @client
      author {
        id
        username
      }
    }
  }
`;

export const LIKE_POST = gql`
  mutation LikePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      likesCount
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($postId: ID!) {
    deletePost(postId: $postId) {
      id
    }
  }
`;

// Comments mutations
export const CREATE_COMMENT = gql`
  mutation CreateComment($postId: ID!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
      body
      author {
        username
        profilePicture
      }
    }
  }
`;

export const EDIT_COMMENT = gql`
  mutation EditComment($postId: ID!, $commentId: ID!, $body: String!) {
    editComment(postId: $postId, commentId: $commentId, body: $body) {
      id
      body
      author {
        username
        profilePicture
      }
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation DeleteComment($postId: ID!, $commentId: ID!) {
    deleteComment(postId: $postId, commentId: $commentId) {
      id
    }
  }
`;

//= ============================
// CLIENT MUTATIONS
//= ============================
export const TOGGLE_POST_DROPDOWN_HIDDEN = gql`
  mutation ToggleDropdownHidden($id: Int!) {
    togglePostDropdownHidden(id: $id) @client
  }
`;

export const TOGGLE_COMMENT_DROPDOWN_HIDDEN = gql`
  mutation ToggleDropdownHidden($id: Int!) {
    toggleCommentDropdownHidden(id: $id) @client
  }
`;

export const CLIENT__SET_CURRENT_COMMENT = gql`
  mutation SetCurrentComment($body: String!, $commentId: ID!) {
    setCurrentComment(body: $body, commentId: $commentId) @client
  }
`;
