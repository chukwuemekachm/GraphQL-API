import { QueryResolvers } from '../graphqlgen';

export abstract class IReviewQuery {
  static getReviews: QueryResolvers.GetReviewsResolver;
}
