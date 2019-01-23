import { BookResolvers } from '../types/graphqlgen';
import { Publisher, User, Rating } from '../types/types';

export const Book: BookResolvers.Type = {
  ...BookResolvers.defaultResolvers,

  publishers: async ({ id }, args, { prisma }): Promise<Publisher[]> => {
    const publishers: Publisher[] = await prisma.book({ id }).publishers();
    return publishers;
  },
  authors: async ({ id }, args, { prisma }): Promise<User[]> => {
    const authors: User[] = await prisma.book({ id }).authors();
    return authors;
  },
  ratings: async ({ id }, args, { prisma }): Promise<Rating[]> => {
    const ratings: Rating[] = prisma.book({ id }).ratings();
    return ratings;
  },
};
