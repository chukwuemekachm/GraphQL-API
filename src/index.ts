import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers';

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => ({ ...request }),
});

server.start(
  {
    port: PORT || 4000,
    endpoint: '/graphql',
    playground: process.env.NODE_ENV !== 'production' ? '/playground' : false,
  },
  () => console.log(`Server is running on http://localhost:${PORT} 🚀`)
);

server.express.all('*', (request, response) =>
  response.status(404).json({
    errors: [
      {
        message: 'Resource not available on this server',
      }
    ]
  })
);
