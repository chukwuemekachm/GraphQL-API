import { IContext } from '../../types/IContext';
import { QueryResolvers } from '../../types/graphqlgen';
import { IReviewQuery } from '../../types/query/IReviewQuery';
import { Review } from '../../prisma/generated/prisma-client';

class ReviewQuery implements IReviewQuery {
  /**
   * @description Returns a list of reviews on the platform
   * Returning an ordered, filtered and paginated list of reviews
   *
   * @param {object} parent The previous GraphQL object
   * @param {object} args The request payload
   * @param {object} context The request context
   *
   * @returns {array}
   */
  public static getReviews: QueryResolvers.GetReviewsResolver = async (
    parent: undefined,
    { sort: reviewInput = {} }: any,
    { prisma }: IContext,
  ): Promise<Review[]> => {
    try {
      const { search, orderBy, offset, limit } = reviewInput;
      const where = {
        review_contains: search,
      };

      return prisma.reviews({
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

export default ReviewQuery;
