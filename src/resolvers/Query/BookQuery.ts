import { Publisher, Book } from '../../prisma/generated/prisma-client';
import { IContext } from '../../types/IContext';
import { QueryResolvers } from '../../types/graphqlgen';
import { IBookQuery } from '../../types/query/IBookQuery';

class BookQuery implements IBookQuery {
  /**
   * @description Returns a list of books on the platform
   * Returning an ordered, filtered and paginated list of books
   *
   * @param {object} parent The previous GraphQL object
   * @param {object} args The request payload
   * @param {object} context The request context
   *
   * @returns {array}
   */
  public static getBooks: QueryResolvers.GetBooksResolver = async (
    parent: undefined,
    { sort: bookInput = {} }: any,
    { prisma }: IContext,
  ): Promise<Book[]> => {
    try {
      const { search, orderBy, offset, limit } = bookInput;
      const where = {
        OR: [
          { title_contains: search },
          { description_contains: search },
          { isbnNo_contains: search },
        ],
      };

      return prisma.books({
        where,
        orderBy,
        skip: offset,
        first: limit,
      });
    } catch (err) {
      throw err;
    }
  };
}

export default BookQuery;
