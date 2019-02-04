import { ReviewResolvers } from '../types/graphqlgen';
import { User, Book } from '../prisma/generated/prisma-client';

export const Review: ReviewResolvers.Type = {
  ...ReviewResolvers.defaultResolvers,

  reviewer: async ({ id }, args, { prisma }): Promise<User> => {
    const reviewer: User = await prisma.review({ id }).reviewer();
    return reviewer;
  },
  book: async ({ id }, args, { prisma }): Promise<Book> => {
    const book: Book = await prisma.review({ id }).book();
    return book;
  },
};
