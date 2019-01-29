import { QueryResolvers } from '../graphqlgen';

export abstract class IBookQuery {
  static getBooks: QueryResolvers.GetBooksResolver;
}
