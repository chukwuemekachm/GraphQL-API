import { QueryResolvers } from '../graphqlgen';

export abstract class IUserQuery {
  static getAuthors: QueryResolvers.GetPublishersResolver;
}
