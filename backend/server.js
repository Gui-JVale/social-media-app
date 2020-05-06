import express from "express";
import mongoose from "mongoose";
import session from "client-sessions";
import cors from "cors";
import passport from "passport";
import bcrypt from "bcryptjs";
import helmet from "helmet";

import User from "./models/user.model";

import { GraphQLLocalStrategy, buildContext } from "graphql-passport";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

//APP SETUP
require("dotenv").config();

const startServer = async () => {
  const app = express();

  // GENERAL APP SETUP
  app.use(express.json());
  app.use(helmet());

  // AUTHENTICATION
  passport.use(
    new GraphQLLocalStrategy(async (username, password, done) => {
      let error;
      const user = await User.findOne({ username });
      if (!user) {
        error = new Error("User not found");
      } else {
        const match = await bcrypt.compareSync(password, user.password);
        if (!match) {
          error = new Error("Wrong Credentials");
          return done(error, user);
        }
      }
      done(error, user);
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
  });

  app.use(
    session({
      cookieName: "session",
      secret: process.env.SESSION_SECRET,
      duration: 30 * 60 * 1000,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  // CORS SETUP
  const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  };
  app.use(cors(corsOptions));

  // GRAPHQL + APOLLO SETUP
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => buildContext({ req, res, User }),
    playground: {
      settings: {
        "request.credentials": "same-origin",
      },
    },
  });
  server.applyMiddleware({ app, cors: false });

  // MONGODB SETUP
  const uri = process.env.ATLAS_URI;
  const connection = mongoose.connection;
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  connection.once("open", () => {
    console.log("DATABASE CONNECTION ESTABLISHED");
  });

  // START SERVER
  app.listen({ port: 4000 }, () => {
    console.log(`SERVER READY AT: http://localhost:4000${server.graphqlPath}`);
  });
};

startServer();
