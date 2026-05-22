import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { initializeApollo } from '../lib/apollo-client'

function MyApp({ Component, pageProps }) {
  const apolloClient = initializeApollo()

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...[pageProps]} />
    </ApolloProvider>
  )
}

export default MyApp
