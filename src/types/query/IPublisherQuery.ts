import { QueryResolvers } from '../graphqlgen';

export abstract class IPublisherQuery {
  static getPublishers: QueryResolvers.GetPublishersResolver;
}
