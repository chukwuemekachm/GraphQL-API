import { MutationResolvers } from '../graphqlgen';

export abstract class IBookMutation {
  static createBook: MutationResolvers.CreateBookResolver;
}
