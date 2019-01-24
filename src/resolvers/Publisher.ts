import { PublisherResolvers } from '../types/graphqlgen';
import { Book } from '../types/types';

export const Publisher: PublisherResolvers.Type = {
  ...PublisherResolvers.defaultResolvers,

  publication: async ({ id }, args, { prisma }): Promise<Book[]> => {
    const publication: Book[] = await prisma.publisher({ id }).publication();
    return publication;
  },
};
