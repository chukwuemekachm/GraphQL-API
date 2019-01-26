import { User } from '../../prisma/generated/prisma-client';
import { IContext } from '../../types/IContext';
import { QueryResolvers } from '../../types/graphqlgen';
import { IUserQuery } from '../../types/query/IUserQuery';

class UserQuery implements IUserQuery {
  /**
   * @description Returns a list of authors on the platform
   * Returning an ordered, filtered and paginated list of authors
   *
   * @param {object} parent The previous GraphQL object
   * @param {object} args The request payload
   * @param {object} context The request context
   *
   * @returns {object}
   */
  public static getAuthors: QueryResolvers.GetAuthorsResolver = async (
    parent: undefined,
    { sort: authorInput = {} }: any,
    { prisma }: IContext,
  ): Promise<User[]> => {
    try {
      const { search, orderBy, offset, limit } = authorInput;

      return prisma.users({
        where: {
          AND: [
            { type: 'AUTHOR' },
            {
              OR: [
                { lastName_contains: search },
                { firstName_contains: search },
                { email_contains: search },
              ],
            },
          ],
        },
        orderBy,
        skip: offset,
        first: limit,
      });
    } catch (err) {
      throw err;
    }
  };
}

export default UserQuery;
