import { MutationResolvers } from './graphqlgen';

export abstract class IAuthMutation {
  static signup: MutationResolvers.SignupResolver;
  static login: MutationResolvers.LoginResolver;
}
