require('dotenv').config();

import express, { Application } from 'express';
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./graphql";
import { connectDatabase } from "./database";

const mount = async (app: Application) => {
  const db = await connectDatabase();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db })
  });

  server.applyMiddleware({ app, path: '/api' });

  app.listen(process.env.PORT);

  console.log(`🚀 [app] localhost:${process.env.PORT}`);
};

mount(express());
