import { gql } from "apollo-server-express";

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
    followers: [User]
    following: [User]
    notifications: [Notification]!
    unreadNotificationsCount: Int!
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
    author: Author!
  }

  type Likes {
    createdAt: String!
    username: String!
  }

  type Notification {
    actionType: String!
    read: Boolean!
    createAt: String!
    targetId: ID!
    author: Author!
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
    getNotifications: [Notification]!
    getUserById(userId: ID!): User
    posts: [Post!]!
    getPostById(postId: ID!): Post
    getPostComments(postId: ID!): [Comment]!
  }

  type Mutation {
    createUser(createUserInput: CreateUserInput): User!
    login(username: String!, password: String!): User
    logout: Boolean
    followUser(userToFollowId: ID!): User!
    markNotificationsAsRead: [Notification]!
    createPost(body: String!, image: String): Post
    editPost(postId: ID!, body: String!): Post!
    deletePost(postId: ID!): Post!
    createComment(postId: ID!, body: String!): Comment!
    editComment(postId: ID!, commentId: ID!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Comment!
    likePost(postId: ID!): Post!
  }
`;

export default typeDefs;
