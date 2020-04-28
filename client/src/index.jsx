import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';

import { typeDefs, resolvers } from './graphql/resolvers';

import './index.css';
import { default as App } from './containers/App.container';

const link = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  },
  credentials: 'include',
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  cacheRedirects: {
    Query: {
      getPostById: (_parent, { postId }, { getCacheKey }) =>
        getCacheKey({ id: postId, __typename: 'Post' }),
    },
  },
  link,
  typeDefs,
  resolvers,
});

client.writeData({
  data: {
    currentComment: null,
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
