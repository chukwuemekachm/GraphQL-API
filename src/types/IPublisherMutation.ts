import { MutationResolvers } from './graphqlgen';

export abstract class IPublisherMutation {
  static createPublisher: MutationResolvers.CreatePublisherResolver;
}
