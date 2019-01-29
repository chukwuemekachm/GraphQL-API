import { GraphQLResolveInfo } from 'graphql';

import { QueryResolvers } from '../../types/graphqlgen';
import { IContext } from '../../types/IContext';
import PublisherQuery from './PublisherQuery';
import UserQuery from './UserQuery';
import BookQuery from './BookQuery';

const query: QueryResolvers.Type = {
  info: () => 'Welcome to my GraphQL API! 🚀 🚀',
  getPublishers: (
    parent: undefined,
    args: QueryResolvers.ArgsGetPublishers,
    context: IContext,
    info: GraphQLResolveInfo,
  ) => PublisherQuery.getPublishers(parent, args, context, info),
  getAuthors: (
    parent: undefined,
    args: any,
    context: IContext,
    info: GraphQLResolveInfo,
  ) => UserQuery.getAuthors(parent, args, context, info),
  getBooks: (
    parent: undefined,
    args: any,
    context: IContext,
    info: GraphQLResolveInfo,
  ) => BookQuery.getBooks(parent, args, context, info),
};

export default query;
