import AuthMutation from './AuthMutation';
import { IContext } from '../../types/IContext';
import { MutationResolvers } from '../../types/graphqlgen';

const mutation: MutationResolvers.Type = {
  signup: (
    parent: undefined,
    args: MutationResolvers.ArgsSignup,
    context: IContext,
  ) => AuthMutation.signup(parent, args, context),
  login: (
    parent: undefined,
    args: MutationResolvers.ArgsLogin,
    context: IContext,
  ) => AuthMutation.login(parent, args, context),
};

export default mutation;
