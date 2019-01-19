import { GraphQLServer } from 'graphql-yoga';

import { prisma} from './prisma/generated/prisma-client/index';
import resolvers from './resolvers';
import errorFormater from './helpers/errorFormater';
import { GraphQLError } from 'graphql';

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: ({ request }) => ({
    request,
    prisma,
  }),
});

server.start(
  {
    port: PORT || 4000,
    endpoint: '/graphql',
    playground: process.env.NODE_ENV !== 'production' ? '/playground' : false,
    formatError: (error: GraphQLError) => errorFormater(error),
  },
  () => console.log(`Server is running on http://localhost:${PORT} 🚀`)
);
