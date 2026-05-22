import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: '/api/graphql',
    }),
    cache: new InMemoryCache(),
  });
};

let apolloClient;

export function initializeApollo() {
  if (!apolloClient) {
    apolloClient = createApolloClient();
  }
  return apolloClient;
}