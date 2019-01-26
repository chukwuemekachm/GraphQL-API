import { Publisher } from '../../prisma/generated/prisma-client';
import { IContext } from '../../types/IContext';
import { QueryResolvers } from '../../types/graphqlgen';
import { IPublisherQuery } from '../../types/query/IPublisherQuery';

class PublisherQuery implements IPublisherQuery {
  /**
   * @description Returns a list of publishers on the platform
   * Returning an ordered, filtered and paginated list of publishers
   *
   * @param {object} parent The previous GraphQL object
   * @param {object} args The request payload
   * @param {object} context The request context
   *
   * @returns {array}
   */
  public static getPublishers: QueryResolvers.GetPublishersResolver = async (
    parent: undefined,
    { sort: publisherInput = {} }: any,
    { prisma }: IContext,
  ): Promise<Publisher[]> => {
    try {
      const { search, orderBy, offset, limit } = publisherInput;
      const where = {
        OR: [
          {
            name_contains: search,
          },
          {
            about_contains: search,
          },
        ],
      };
      return prisma.publishers({
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

export default PublisherQuery;
