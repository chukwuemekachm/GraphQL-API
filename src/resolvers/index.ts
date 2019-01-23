import Query from './Query';
import Mutation from './Mutation';
import { Resolvers } from '../types/graphqlgen';

const resolvers: Partial<Resolvers> = {
  Query,
  Mutation,
};

export default resolvers;
