import { PublisherResolvers } from '../types/graphqlgen';

export const Publisher: PublisherResolvers.Type = {
  ...PublisherResolvers.defaultResolvers,

  publication: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
};
