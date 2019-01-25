import { GraphQLResolveInfo } from 'graphql';

import { QueryResolvers } from '../../types/graphqlgen';
import { IContext } from '../../types/IContext';
import PublisherQuery from './PublisherQuery';

const query: QueryResolvers.Type = {
  info: () => 'Welcome to my GraphQL API! 🚀 🚀',
  getPublishers: (
    parent: undefined,
    args: any,
    context: IContext,
    info: GraphQLResolveInfo,
  ) => PublisherQuery.getPublishers(parent, args, context),
};

export default query;
