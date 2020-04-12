import  { gql } from 'apollo-boost';

// BACKEND MUTATIONS
export const CREATE_POST = gql`
mutation createPost ($body: String!){
  createPost (body: $body image: "img") {
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

export const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
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