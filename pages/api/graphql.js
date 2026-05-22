import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import { typeDefs } from '../../lib/graphql/schema';
import { resolvers } from '../../lib/graphql/resolvers';

const cors = Cors();

if (!globalThis.__apolloServer) {
  globalThis.__apolloServer = new ApolloServer({ typeDefs, resolvers });
  globalThis.__startServer = globalThis.__apolloServer.start();
}

const apolloServer = globalThis.__apolloServer;
const startServer = globalThis.__startServer;

async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }
  await startServer;
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors(handler);