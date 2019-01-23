import { UserResolvers } from '../types/graphqlgen';

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,

  books: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
  reviews: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
};
