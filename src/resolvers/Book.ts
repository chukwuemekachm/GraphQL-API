import { BookResolvers } from '../types/graphqlgen';

export const Book: BookResolvers.Type = {
  ...BookResolvers.defaultResolvers,

  publishers: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
  authors: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
  ratings: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
};
