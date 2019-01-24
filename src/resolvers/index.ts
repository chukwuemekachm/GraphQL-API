import Query from './Query';
import Mutation from './Mutation';
import { Resolvers } from '../types/graphqlgen';
import { User } from './User';
import { Book } from './Book';
import { Publisher } from './Publisher';
import { Review } from './Review';
import { Rating } from './Rating';

const resolvers: Partial<Resolvers> = {
  Query,
  Mutation,
  User,
  Book,
  Publisher,
  Review,
  Rating,
};

export default resolvers;
