import { UserResolvers } from '../types/graphqlgen';
import { Book, Review } from '../prisma/generated/prisma-client';

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,

  books: async ({ id }, args, { prisma }): Promise<Book[]> => {
    const books: Book[] = await prisma.user({ id }).books();
    return books;
  },
  reviews: async ({ id }, args, { prisma }): Promise<Review[]> => {
    const reviews: Review[] = await prisma.user({ id }).reviews();
    return reviews;
  },
};
