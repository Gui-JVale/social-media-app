import  { gql } from 'apollo-boost';
//=============================
// BACKEND MUTATIONS
//=============================

// Post Mutations
export const CREATE_POST = gql`
mutation CreatePost ($body: String!){
  createPost (body: $body image: "img") {
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

//=============================
// CLIENT MUTATIONS
//=============================
export const TOGGLE_DROPDOWN_HIDDEN = gql`
  mutation ToggleDropdownHidden($id: Int!) {
    toggleDropdownHidden(id: $id) @client
  }
`;