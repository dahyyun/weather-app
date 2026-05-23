import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client/react";
import { initializeApollo } from "../lib/apollo-client";

function MyApp({ Component, pageProps }) {
  const apolloClient = initializeApollo();

  return (
    <ApolloProvider client={apolloClient}>
      <div className="layout">
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
