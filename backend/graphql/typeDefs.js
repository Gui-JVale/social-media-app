import { gql } from 'apollo-server-express';

const typeDefs = gql`

  type User {
    id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
    token: String
    createdAt: String!
  }

  type Post {
    id: ID!
    body: String!
    image: String
    username: String!
    comments: [Comment]
    likes: [Likes]
  }

  type Comment {
    id: ID!
    body: String!
    createdAt: String!
    username: String
  }

  type Likes {
    id: ID!
    createdAt: String!
    username: String!
  }

  input CreateUserInput {
    username: String!
    firstName: String!
    lastName: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Query {
    getUsers: [User!]!
    getPosts: [Post!]!
    getPostById(postId: ID!): Post
  }

  type Mutation {
    createUser(createUserInput: CreateUserInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!, image: String!): Post
    deletePost(postId: ID!): String!
    createComment(postId: ID!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }
`;

export default typeDefs;