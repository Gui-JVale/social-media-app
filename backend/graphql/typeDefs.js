import { gql } from 'apollo-server-express';

const typeDefs = gql`

  type User {
    id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
    picture: String
    createdAt: String!
    posts: [Post]
  }

  type Author {
    id: ID!
    username: String!
    profilePicture: String
  }

  type Post {
    id: ID!
    body: String!
    image: String
    author: Author!
    likesCount: Int!
    commentsCount: Int!
    comments: [Comment]
    likes: [Likes]
  }

  type Comment {
    id: ID!
    body: String!
    createdAt: String
    username: String
  }

  type Likes {
    createdAt: String!
    username: String!
  }

  input CreateUserInput {
    username: String!
    firstName: String
    lastName: String
    password: String!
    confirmPassword: String!
    email: String!
    picture: String!
  }

  type AuthPayload {
    user: User
  }

  type Query {
    users: [User!]!
    currentUser: User
    getUserById(userId: ID!): User
    posts: [Post!]!
    getPostById(postId: ID!): Post
  }

  type Mutation {
    createUser(createUserInput: CreateUserInput): User!
    login(username: String!, password: String!): User
    logout: Boolean
    createPost(body: String!, image: String): Post
    editPost(postId: ID!, body: String!): Post!
    deletePost(postId: ID!): Post!
    createComment(postId: ID!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }
`;

export default typeDefs;