import  { gql } from 'apollo-boost';

// BACKEND MUTATIONS
export const CREATE_POST = gql`
mutation createPost ($body: String!){
  createPost (body: $body image: "img") {
    id
    body
    username
  }
}
`;

// CLIENT MUTATIONS
export const SET_CURRENT_USER = gql`
  mutation SetCurrentUser {
    setCurrentUser @client
  }
`;