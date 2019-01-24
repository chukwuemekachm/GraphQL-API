import AuthMutation from './AuthMutation';
import { IContext } from '../../types/IContext';
import { MutationResolvers } from '../../types/graphqlgen';
import { GraphQLResolveInfo } from 'graphql';

const mutation: MutationResolvers.Type = {
  signup: (
    parent: undefined,
    args: MutationResolvers.ArgsSignup,
    context: IContext,
    info: GraphQLResolveInfo,
  ) => AuthMutation.signup(parent, args, context, info),
  login: (
    parent: undefined,
    args: MutationResolvers.ArgsLogin,
    context: IContext,
    info: GraphQLResolveInfo,
  ) => AuthMutation.login(parent, args, context, info),
};

export default mutation;
