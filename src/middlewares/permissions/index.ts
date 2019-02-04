import { shield } from 'graphql-shield';
import { IMiddlewareGenerator } from 'graphql-middleware';

import { isAuthenticated } from './rules';

const permissions: IMiddlewareGenerator<any, any, any> = shield(
  {
    Query: {
      getPublishers: isAuthenticated,
      getAuthors: isAuthenticated,
      getBooks: isAuthenticated,
      getReviews: isAuthenticated,
    },
    Mutation: {
      createPublisher: isAuthenticated,
      createAuthor: isAuthenticated,
      createBook: isAuthenticated,
      createReview: isAuthenticated,
    },
  },
  {
    fallbackError: new Error('You need to login to perform this operation!'),
  },
);

export default permissions;
