// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from 'graphql';
import { AuthResponse } from './types';
import {
  User,
  Book,
  Publisher,
  Rating,
  Review,
} from '../prisma/generated/prisma-client';
import { IContext } from './IContext';

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export type InfoResolver = (
    parent: undefined,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export interface Type {
    info: (
      parent: undefined,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface SignupInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
  export interface LoginInput {
    email: string;
    password: string;
  }

  export interface ArgsSignup {
    user?: SignupInput | null;
  }

  export interface ArgsLogin {
    user?: LoginInput | null;
  }

  export type SignupResolver = (
    parent: undefined,
    args: ArgsSignup,
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => AuthResponse | Promise<AuthResponse>;

  export type LoginResolver = (
    parent: undefined,
    args: ArgsLogin,
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => AuthResponse | Promise<AuthResponse>;

  export interface Type {
    signup: (
      parent: undefined,
      args: ArgsSignup,
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => AuthResponse | Promise<AuthResponse>;

    login: (
      parent: undefined,
      args: ArgsLogin,
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => AuthResponse | Promise<AuthResponse>;
  }
}

export namespace AuthResponseResolvers {
  export const defaultResolvers = {
    token: (parent: AuthResponse) => parent.token,
    user: (parent: AuthResponse) => parent.user,
  };

  export type TokenResolver = (
    parent: AuthResponse,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type UserResolver = (
    parent: AuthResponse,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => User | Promise<User>;

  export interface Type {
    token: (
      parent: AuthResponse,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    user: (
      parent: AuthResponse,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => User | Promise<User>;
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    firstName: (parent: User) => parent.firstName,
    lastName: (parent: User) => parent.lastName,
    email: (parent: User) => parent.email,
    createdAt: (parent: User) => parent.createdAt,
    updatedAt: (parent: User) => parent.updatedAt,
  };

  export type IdResolver = (
    parent: User,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type FirstNameResolver = (
    parent: User,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type LastNameResolver = (
    parent: User,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type EmailResolver = (
    parent: User,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type BooksResolver = (
    parent: User,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => Book[] | null | Promise<Book[] | null>;

  export type ReviewsResolver = (
    parent: User,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => Review[] | null | Promise<Review[] | null>;

  export type CreatedAtResolver = (
    parent: User,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type UpdatedAtResolver = (
    parent: User,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: User,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    firstName: (
      parent: User,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    lastName: (
      parent: User,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    email: (
      parent: User,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    books: (
      parent: User,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => Book[] | null | Promise<Book[] | null>;

    reviews: (
      parent: User,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => Review[] | null | Promise<Review[] | null>;

    createdAt: (
      parent: User,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    updatedAt: (
      parent: User,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;
  }
}

export namespace BookResolvers {
  export const defaultResolvers = {
    id: (parent: Book) => parent.id,
    title: (parent: Book) => parent.title,
    description: (parent: Book) =>
      parent.description === undefined ? null : parent.description,
    pages: (parent: Book) => (parent.pages === undefined ? null : parent.pages),
    publishDateTime: (parent: Book) => parent.publishDateTime,
    isbnNo: (parent: Book) =>
      parent.isbnNo === undefined ? null : parent.isbnNo,
    createdAt: (parent: Book) => parent.createdAt,
    updatedAt: (parent: Book) => parent.updatedAt,
  };

  export type IdResolver = (
    parent: Book,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type TitleResolver = (
    parent: Book,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type DescriptionResolver = (
    parent: Book,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>;

  export type PublishersResolver = (
    parent: Book,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => Publisher[] | Promise<Publisher[]>;

  export type PagesResolver = (
    parent: Book,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => number | null | Promise<number | null>;

  export type PublishDateTimeResolver = (
    parent: Book,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type AuthorsResolver = (
    parent: Book,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => User[] | Promise<User[]>;

  export type RatingsResolver = (
    parent: Book,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => Rating[] | null | Promise<Rating[] | null>;

  export type IsbnNoResolver = (
    parent: Book,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => number | null | Promise<number | null>;

  export type CreatedAtResolver = (
    parent: Book,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type UpdatedAtResolver = (
    parent: Book,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: Book,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    title: (
      parent: Book,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    description: (
      parent: Book,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>;

    publishers: (
      parent: Book,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => Publisher[] | Promise<Publisher[]>;

    pages: (
      parent: Book,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => number | null | Promise<number | null>;

    publishDateTime: (
      parent: Book,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    authors: (
      parent: Book,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => User[] | Promise<User[]>;

    ratings: (
      parent: Book,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => Rating[] | null | Promise<Rating[] | null>;

    isbnNo: (
      parent: Book,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => number | null | Promise<number | null>;

    createdAt: (
      parent: Book,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    updatedAt: (
      parent: Book,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;
  }
}

export namespace PublisherResolvers {
  export const defaultResolvers = {
    id: (parent: Publisher) => parent.id,
    name: (parent: Publisher) => parent.name,
    about: (parent: Publisher) =>
      parent.about === undefined ? null : parent.about,
    address: (parent: Publisher) =>
      parent.address === undefined ? null : parent.address,
    createdAt: (parent: Publisher) => parent.createdAt,
    updatedAt: (parent: Publisher) => parent.updatedAt,
  };

  export type IdResolver = (
    parent: Publisher,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: Publisher,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type AboutResolver = (
    parent: Publisher,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>;

  export type AddressResolver = (
    parent: Publisher,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>;

  export type PublicationResolver = (
    parent: Publisher,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => Book[] | null | Promise<Book[] | null>;

  export type CreatedAtResolver = (
    parent: Publisher,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type UpdatedAtResolver = (
    parent: Publisher,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: Publisher,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    name: (
      parent: Publisher,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    about: (
      parent: Publisher,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>;

    address: (
      parent: Publisher,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>;

    publication: (
      parent: Publisher,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => Book[] | null | Promise<Book[] | null>;

    createdAt: (
      parent: Publisher,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    updatedAt: (
      parent: Publisher,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;
  }
}

export namespace RatingResolvers {
  export const defaultResolvers = {
    id: (parent: Rating) => parent.id,
    rating: (parent: Rating) => parent.rating,
    createdAt: (parent: Rating) => parent.createdAt,
  };

  export type IdResolver = (
    parent: Rating,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type RatingResolver = (
    parent: Rating,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => number | Promise<number>;

  export type RaterResolver = (
    parent: Rating,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => User | Promise<User>;

  export type BookResolver = (
    parent: Rating,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => Book | Promise<Book>;

  export type CreatedAtResolver = (
    parent: Rating,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: Rating,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    rating: (
      parent: Rating,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => number | Promise<number>;

    rater: (
      parent: Rating,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => User | Promise<User>;

    book: (
      parent: Rating,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => Book | Promise<Book>;

    createdAt: (
      parent: Rating,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;
  }
}

export namespace ReviewResolvers {
  export const defaultResolvers = {
    id: (parent: Review) => parent.id,
    review: (parent: Review) => parent.review,
    createdAt: (parent: Review) => parent.createdAt,
  };

  export type IdResolver = (
    parent: Review,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type ReviewResolver = (
    parent: Review,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export type ReviewerResolver = (
    parent: Review,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => User | Promise<User>;

  export type BookResolver = (
    parent: Review,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => Book | Promise<Book>;

  export type CreatedAtResolver = (
    parent: Review,
    args: {},
    ctx: IContext,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: Review,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    review: (
      parent: Review,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;

    reviewer: (
      parent: Review,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => User | Promise<User>;

    book: (
      parent: Review,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => Book | Promise<Book>;

    createdAt: (
      parent: Review,
      args: {},
      ctx: IContext,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>;
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  Mutation: MutationResolvers.Type;
  AuthResponse: AuthResponseResolvers.Type;
  User: UserResolvers.Type;
  Book: BookResolvers.Type;
  Publisher: PublisherResolvers.Type;
  Rating: RatingResolvers.Type;
  Review: ReviewResolvers.Type;
}