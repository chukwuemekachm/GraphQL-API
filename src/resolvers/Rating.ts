import { RatingResolvers } from '../types/graphqlgen';

export const Rating: RatingResolvers.Type = {
  ...RatingResolvers.defaultResolvers,

  rater: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
  book: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
};
