import { MutationResolvers } from '../graphqlgen';

export abstract class IUserMutation {
  static createAuthor: MutationResolvers.CreateAuthorResolver;
}
