import { MutationResolvers } from '../graphqlgen';

export abstract class IReviewMutation {
  static createReview: MutationResolvers.CreateReviewResolver;
}
