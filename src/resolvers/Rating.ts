import { RatingResolvers } from '../types/graphqlgen';
import { User, Book } from '../prisma/generated/prisma-client';

export const Rating: RatingResolvers.Type = {
  ...RatingResolvers.defaultResolvers,

  rater: async ({ id }, args, { prisma }): Promise<User> => {
    const rater: User = await prisma.rating({ id }).rater();
    return rater;
  },
  book: async ({ id }, args, { prisma }): Promise<Book> => {
    const book: Book = await prisma.rating({ id }).book();
    return book;
  },
};
