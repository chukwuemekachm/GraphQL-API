import { GraphQLResolveInfo } from 'graphql';

import AuthMutation from './AuthMutation';
import { IContext } from '../../types/IContext';
import { MutationResolvers } from '../../types/graphqlgen';
import PublisherMutation from './PublisherMutation';
import UserMutation from './UserMutation';
import BookMutation from './BookMutation';
import ReviewMutation from './ReviewMutation';

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
  createPublisher: (
    parent: undefined,
    args: MutationResolvers.ArgsCreatePublisher,
    context: IContext,
    info: GraphQLResolveInfo,
  ) => PublisherMutation.createPublisher(parent, args, context, info),
  createAuthor: (
    parent: undefined,
    args: MutationResolvers.ArgsCreateAuthor,
    context: IContext,
    info: GraphQLResolveInfo,
  ) => UserMutation.createAuthor(parent, args, context, info),
  createBook: (
    parent: undefined,
    args: MutationResolvers.ArgsCreateBook,
    context: IContext,
    info: GraphQLResolveInfo,
  ) => BookMutation.createBook(parent, args, context, info),
  createReview: (
    parent: undefined,
    args: MutationResolvers.ArgsCreateReview,
    context: IContext,
    info: GraphQLResolveInfo,
  ) => ReviewMutation.createReview(parent, args, context, info),
};

export default mutation;
