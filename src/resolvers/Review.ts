import { ReviewResolvers } from '../types/graphqlgen';

export const Review: ReviewResolvers.Type = {
  ...ReviewResolvers.defaultResolvers,

  reviewer: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
  book: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
};
