import  { gql } from 'apollo-boost';

// BACKEND MUTATIONS
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

// CLIENT MUTATIONS
export const TOGGLE_DROPDOWN_HIDDEN = gql`
  mutation ToggleDropdownHidden($id: Int!) {
    toggleDropdownHidden(id: $id) @client
  }
`;