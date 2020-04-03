import express from 'express';
import mongoose from 'mongoose';

import { ApolloServer, gql } from 'apollo-server-express';
import  typeDefs  from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

//APP SETUP
require("dotenv").config();

const startServer = async () => {
  const app = express();

  app.use(express.json())
  
  // GRAPHQL + APOLLO SETUP
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
  });
  server.applyMiddleware({ app });
  
  // MONGODB SETUP
  const uri = process.env.ATLAS_URI;
  const connection = mongoose.connection;
  await mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
  connection.once('open', () => {
    console.log("DATABASE CONNECTION ESTABLISHED")
  })
  
  app.listen({ port: 4000 }, () => {
    console.log (`SERVER READY AT: http://localhost:4000${server.graphqlPath}`)
  });
}

startServer();