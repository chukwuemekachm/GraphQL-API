import { MutationResolvers } from '../../types/graphqlgen';
import { IContext } from '../../types/IContext';
import validateRequest, {
  IValidationErrors,
  validationMessage,
} from '../../validators';
import FormatedError from '../../errors/FormatedError';
import { BookValidator } from '../../validators/BookValidator';
import { Book } from '../../prisma/generated/prisma-client';
import { checkAuthors, checkPublishers } from '../../utils';
import { IBookMutation } from '../../types/mutation/IBookMutation';

class BookMutation implements IBookMutation {
  /**
   * @description Creates a new book on the platform
   * Returning the newly created book
   *
   * @param {object} parent The previous GraphQL object
   * @param {object} args The request payload
   * @param {object} context The request context
   *
   * @returns {object}
   */
  public static createBook: MutationResolvers.CreateBookResolver = async (
    parent: undefined,
    { book: bookInput }: any,
    { prisma }: IContext,
  ): Promise<Book> => {
    try {
      const {
        title,
        description,
        isbnNo,
        publishers,
        pages,
        publishDateTime,
        authors,
      } = bookInput;
      const errors: IValidationErrors | boolean = await validateRequest(
        BookValidator,
        bookInput,
      );
      if (errors) {
        throw new FormatedError(validationMessage, errors);
      }

      const authorsExist = await checkAuthors(authors, prisma);
      if (authorsExist) {
        throw new FormatedError("Author(s) don't exist", {
          authors: authorsExist,
        });
      }
      const publishersExist = await checkPublishers(publishers, prisma);
      if (publishersExist) {
        throw new FormatedError("Publishers(s) don't exist", {
          publishers: publishersExist,
        });
      }

      const book: boolean = await prisma.$exists.book({
        OR: [{ title }, { description }, { isbnNo }],
      });
      if (!book) {
        return prisma.createBook({
          title,
          description,
          isbnNo,
          pages,
          publishDateTime,
          authors: {
            connect: authors.map((author: string) => ({ id: author })),
          },
          publishers: {
            connect: publishers.map((publisher: string) => ({ id: publisher })),
          },
        });
      }

      throw new FormatedError('Book with similar information exist', {
        title: ['A book with similar name exists'],
        description: ['A book with similar details exists'],
        isbnNo: ['A book with similar details exists'],
      });
    } catch (err) {
      throw err;
    }
  };
}

export default BookMutation;
