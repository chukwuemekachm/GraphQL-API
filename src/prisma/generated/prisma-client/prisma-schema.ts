export const typeDefs = /* GraphQL */ `type AggregateBook {
  count: Int!
}

type AggregatePublisher {
  count: Int!
}

type AggregateRating {
  count: Int!
}

type AggregateReview {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Book {
  id: ID!
  title: String!
  description: String
  publishers(where: PublisherWhereInput, orderBy: PublisherOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Publisher!]
  pages: Int
  publishDateTime: DateTime!
  authors(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  ratings(where: RatingWhereInput, orderBy: RatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rating!]
  isbnNo: Int
  createdAt: DateTime!
  updatedAt: DateTime!
}

type BookConnection {
  pageInfo: PageInfo!
  edges: [BookEdge]!
  aggregate: AggregateBook!
}

input BookCreateInput {
  title: String!
  description: String
  publishers: PublisherCreateManyWithoutPublicationInput
  pages: Int
  publishDateTime: DateTime!
  authors: UserCreateManyWithoutBooksInput
  ratings: RatingCreateManyWithoutBookInput
  isbnNo: Int
}

input BookCreateManyWithoutAuthorsInput {
  create: [BookCreateWithoutAuthorsInput!]
  connect: [BookWhereUniqueInput!]
}

input BookCreateManyWithoutPublishersInput {
  create: [BookCreateWithoutPublishersInput!]
  connect: [BookWhereUniqueInput!]
}

input BookCreateOneInput {
  create: BookCreateInput
  connect: BookWhereUniqueInput
}

input BookCreateOneWithoutRatingsInput {
  create: BookCreateWithoutRatingsInput
  connect: BookWhereUniqueInput
}

input BookCreateWithoutAuthorsInput {
  title: String!
  description: String
  publishers: PublisherCreateManyWithoutPublicationInput
  pages: Int
  publishDateTime: DateTime!
  ratings: RatingCreateManyWithoutBookInput
  isbnNo: Int
}

input BookCreateWithoutPublishersInput {
  title: String!
  description: String
  pages: Int
  publishDateTime: DateTime!
  authors: UserCreateManyWithoutBooksInput
  ratings: RatingCreateManyWithoutBookInput
  isbnNo: Int
}

input BookCreateWithoutRatingsInput {
  title: String!
  description: String
  publishers: PublisherCreateManyWithoutPublicationInput
  pages: Int
  publishDateTime: DateTime!
  authors: UserCreateManyWithoutBooksInput
  isbnNo: Int
}

type BookEdge {
  node: Book!
  cursor: String!
}

enum BookOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  pages_ASC
  pages_DESC
  publishDateTime_ASC
  publishDateTime_DESC
  isbnNo_ASC
  isbnNo_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BookPreviousValues {
  id: ID!
  title: String!
  description: String
  pages: Int
  publishDateTime: DateTime!
  isbnNo: Int
  createdAt: DateTime!
  updatedAt: DateTime!
}

input BookScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  pages: Int
  pages_not: Int
  pages_in: [Int!]
  pages_not_in: [Int!]
  pages_lt: Int
  pages_lte: Int
  pages_gt: Int
  pages_gte: Int
  publishDateTime: DateTime
  publishDateTime_not: DateTime
  publishDateTime_in: [DateTime!]
  publishDateTime_not_in: [DateTime!]
  publishDateTime_lt: DateTime
  publishDateTime_lte: DateTime
  publishDateTime_gt: DateTime
  publishDateTime_gte: DateTime
  isbnNo: Int
  isbnNo_not: Int
  isbnNo_in: [Int!]
  isbnNo_not_in: [Int!]
  isbnNo_lt: Int
  isbnNo_lte: Int
  isbnNo_gt: Int
  isbnNo_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [BookScalarWhereInput!]
  OR: [BookScalarWhereInput!]
  NOT: [BookScalarWhereInput!]
}

type BookSubscriptionPayload {
  mutation: MutationType!
  node: Book
  updatedFields: [String!]
  previousValues: BookPreviousValues
}

input BookSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BookWhereInput
  AND: [BookSubscriptionWhereInput!]
  OR: [BookSubscriptionWhereInput!]
  NOT: [BookSubscriptionWhereInput!]
}

input BookUpdateDataInput {
  title: String
  description: String
  publishers: PublisherUpdateManyWithoutPublicationInput
  pages: Int
  publishDateTime: DateTime
  authors: UserUpdateManyWithoutBooksInput
  ratings: RatingUpdateManyWithoutBookInput
  isbnNo: Int
}

input BookUpdateInput {
  title: String
  description: String
  publishers: PublisherUpdateManyWithoutPublicationInput
  pages: Int
  publishDateTime: DateTime
  authors: UserUpdateManyWithoutBooksInput
  ratings: RatingUpdateManyWithoutBookInput
  isbnNo: Int
}

input BookUpdateManyDataInput {
  title: String
  description: String
  pages: Int
  publishDateTime: DateTime
  isbnNo: Int
}

input BookUpdateManyMutationInput {
  title: String
  description: String
  pages: Int
  publishDateTime: DateTime
  isbnNo: Int
}

input BookUpdateManyWithoutAuthorsInput {
  create: [BookCreateWithoutAuthorsInput!]
  delete: [BookWhereUniqueInput!]
  connect: [BookWhereUniqueInput!]
  disconnect: [BookWhereUniqueInput!]
  update: [BookUpdateWithWhereUniqueWithoutAuthorsInput!]
  upsert: [BookUpsertWithWhereUniqueWithoutAuthorsInput!]
  deleteMany: [BookScalarWhereInput!]
  updateMany: [BookUpdateManyWithWhereNestedInput!]
}

input BookUpdateManyWithoutPublishersInput {
  create: [BookCreateWithoutPublishersInput!]
  delete: [BookWhereUniqueInput!]
  connect: [BookWhereUniqueInput!]
  disconnect: [BookWhereUniqueInput!]
  update: [BookUpdateWithWhereUniqueWithoutPublishersInput!]
  upsert: [BookUpsertWithWhereUniqueWithoutPublishersInput!]
  deleteMany: [BookScalarWhereInput!]
  updateMany: [BookUpdateManyWithWhereNestedInput!]
}

input BookUpdateManyWithWhereNestedInput {
  where: BookScalarWhereInput!
  data: BookUpdateManyDataInput!
}

input BookUpdateOneRequiredInput {
  create: BookCreateInput
  update: BookUpdateDataInput
  upsert: BookUpsertNestedInput
  connect: BookWhereUniqueInput
}

input BookUpdateOneRequiredWithoutRatingsInput {
  create: BookCreateWithoutRatingsInput
  update: BookUpdateWithoutRatingsDataInput
  upsert: BookUpsertWithoutRatingsInput
  connect: BookWhereUniqueInput
}

input BookUpdateWithoutAuthorsDataInput {
  title: String
  description: String
  publishers: PublisherUpdateManyWithoutPublicationInput
  pages: Int
  publishDateTime: DateTime
  ratings: RatingUpdateManyWithoutBookInput
  isbnNo: Int
}

input BookUpdateWithoutPublishersDataInput {
  title: String
  description: String
  pages: Int
  publishDateTime: DateTime
  authors: UserUpdateManyWithoutBooksInput
  ratings: RatingUpdateManyWithoutBookInput
  isbnNo: Int
}

input BookUpdateWithoutRatingsDataInput {
  title: String
  description: String
  publishers: PublisherUpdateManyWithoutPublicationInput
  pages: Int
  publishDateTime: DateTime
  authors: UserUpdateManyWithoutBooksInput
  isbnNo: Int
}

input BookUpdateWithWhereUniqueWithoutAuthorsInput {
  where: BookWhereUniqueInput!
  data: BookUpdateWithoutAuthorsDataInput!
}

input BookUpdateWithWhereUniqueWithoutPublishersInput {
  where: BookWhereUniqueInput!
  data: BookUpdateWithoutPublishersDataInput!
}

input BookUpsertNestedInput {
  update: BookUpdateDataInput!
  create: BookCreateInput!
}

input BookUpsertWithoutRatingsInput {
  update: BookUpdateWithoutRatingsDataInput!
  create: BookCreateWithoutRatingsInput!
}

input BookUpsertWithWhereUniqueWithoutAuthorsInput {
  where: BookWhereUniqueInput!
  update: BookUpdateWithoutAuthorsDataInput!
  create: BookCreateWithoutAuthorsInput!
}

input BookUpsertWithWhereUniqueWithoutPublishersInput {
  where: BookWhereUniqueInput!
  update: BookUpdateWithoutPublishersDataInput!
  create: BookCreateWithoutPublishersInput!
}

input BookWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  publishers_every: PublisherWhereInput
  publishers_some: PublisherWhereInput
  publishers_none: PublisherWhereInput
  pages: Int
  pages_not: Int
  pages_in: [Int!]
  pages_not_in: [Int!]
  pages_lt: Int
  pages_lte: Int
  pages_gt: Int
  pages_gte: Int
  publishDateTime: DateTime
  publishDateTime_not: DateTime
  publishDateTime_in: [DateTime!]
  publishDateTime_not_in: [DateTime!]
  publishDateTime_lt: DateTime
  publishDateTime_lte: DateTime
  publishDateTime_gt: DateTime
  publishDateTime_gte: DateTime
  authors_every: UserWhereInput
  authors_some: UserWhereInput
  authors_none: UserWhereInput
  ratings_every: RatingWhereInput
  ratings_some: RatingWhereInput
  ratings_none: RatingWhereInput
  isbnNo: Int
  isbnNo_not: Int
  isbnNo_in: [Int!]
  isbnNo_not_in: [Int!]
  isbnNo_lt: Int
  isbnNo_lte: Int
  isbnNo_gt: Int
  isbnNo_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [BookWhereInput!]
  OR: [BookWhereInput!]
  NOT: [BookWhereInput!]
}

input BookWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createBook(data: BookCreateInput!): Book!
  updateBook(data: BookUpdateInput!, where: BookWhereUniqueInput!): Book
  updateManyBooks(data: BookUpdateManyMutationInput!, where: BookWhereInput): BatchPayload!
  upsertBook(where: BookWhereUniqueInput!, create: BookCreateInput!, update: BookUpdateInput!): Book!
  deleteBook(where: BookWhereUniqueInput!): Book
  deleteManyBooks(where: BookWhereInput): BatchPayload!
  createPublisher(data: PublisherCreateInput!): Publisher!
  updatePublisher(data: PublisherUpdateInput!, where: PublisherWhereUniqueInput!): Publisher
  updateManyPublishers(data: PublisherUpdateManyMutationInput!, where: PublisherWhereInput): BatchPayload!
  upsertPublisher(where: PublisherWhereUniqueInput!, create: PublisherCreateInput!, update: PublisherUpdateInput!): Publisher!
  deletePublisher(where: PublisherWhereUniqueInput!): Publisher
  deleteManyPublishers(where: PublisherWhereInput): BatchPayload!
  createRating(data: RatingCreateInput!): Rating!
  updateRating(data: RatingUpdateInput!, where: RatingWhereUniqueInput!): Rating
  updateManyRatings(data: RatingUpdateManyMutationInput!, where: RatingWhereInput): BatchPayload!
  upsertRating(where: RatingWhereUniqueInput!, create: RatingCreateInput!, update: RatingUpdateInput!): Rating!
  deleteRating(where: RatingWhereUniqueInput!): Rating
  deleteManyRatings(where: RatingWhereInput): BatchPayload!
  createReview(data: ReviewCreateInput!): Review!
  updateReview(data: ReviewUpdateInput!, where: ReviewWhereUniqueInput!): Review
  updateManyReviews(data: ReviewUpdateManyMutationInput!, where: ReviewWhereInput): BatchPayload!
  upsertReview(where: ReviewWhereUniqueInput!, create: ReviewCreateInput!, update: ReviewUpdateInput!): Review!
  deleteReview(where: ReviewWhereUniqueInput!): Review
  deleteManyReviews(where: ReviewWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Publisher {
  id: ID!
  name: String!
  about: String
  address: String
  publication(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Book!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PublisherConnection {
  pageInfo: PageInfo!
  edges: [PublisherEdge]!
  aggregate: AggregatePublisher!
}

input PublisherCreateInput {
  name: String!
  about: String
  address: String
  publication: BookCreateManyWithoutPublishersInput
}

input PublisherCreateManyWithoutPublicationInput {
  create: [PublisherCreateWithoutPublicationInput!]
  connect: [PublisherWhereUniqueInput!]
}

input PublisherCreateWithoutPublicationInput {
  name: String!
  about: String
  address: String
}

type PublisherEdge {
  node: Publisher!
  cursor: String!
}

enum PublisherOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  about_ASC
  about_DESC
  address_ASC
  address_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PublisherPreviousValues {
  id: ID!
  name: String!
  about: String
  address: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

input PublisherScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  about: String
  about_not: String
  about_in: [String!]
  about_not_in: [String!]
  about_lt: String
  about_lte: String
  about_gt: String
  about_gte: String
  about_contains: String
  about_not_contains: String
  about_starts_with: String
  about_not_starts_with: String
  about_ends_with: String
  about_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PublisherScalarWhereInput!]
  OR: [PublisherScalarWhereInput!]
  NOT: [PublisherScalarWhereInput!]
}

type PublisherSubscriptionPayload {
  mutation: MutationType!
  node: Publisher
  updatedFields: [String!]
  previousValues: PublisherPreviousValues
}

input PublisherSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PublisherWhereInput
  AND: [PublisherSubscriptionWhereInput!]
  OR: [PublisherSubscriptionWhereInput!]
  NOT: [PublisherSubscriptionWhereInput!]
}

input PublisherUpdateInput {
  name: String
  about: String
  address: String
  publication: BookUpdateManyWithoutPublishersInput
}

input PublisherUpdateManyDataInput {
  name: String
  about: String
  address: String
}

input PublisherUpdateManyMutationInput {
  name: String
  about: String
  address: String
}

input PublisherUpdateManyWithoutPublicationInput {
  create: [PublisherCreateWithoutPublicationInput!]
  delete: [PublisherWhereUniqueInput!]
  connect: [PublisherWhereUniqueInput!]
  disconnect: [PublisherWhereUniqueInput!]
  update: [PublisherUpdateWithWhereUniqueWithoutPublicationInput!]
  upsert: [PublisherUpsertWithWhereUniqueWithoutPublicationInput!]
  deleteMany: [PublisherScalarWhereInput!]
  updateMany: [PublisherUpdateManyWithWhereNestedInput!]
}

input PublisherUpdateManyWithWhereNestedInput {
  where: PublisherScalarWhereInput!
  data: PublisherUpdateManyDataInput!
}

input PublisherUpdateWithoutPublicationDataInput {
  name: String
  about: String
  address: String
}

input PublisherUpdateWithWhereUniqueWithoutPublicationInput {
  where: PublisherWhereUniqueInput!
  data: PublisherUpdateWithoutPublicationDataInput!
}

input PublisherUpsertWithWhereUniqueWithoutPublicationInput {
  where: PublisherWhereUniqueInput!
  update: PublisherUpdateWithoutPublicationDataInput!
  create: PublisherCreateWithoutPublicationInput!
}

input PublisherWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  about: String
  about_not: String
  about_in: [String!]
  about_not_in: [String!]
  about_lt: String
  about_lte: String
  about_gt: String
  about_gte: String
  about_contains: String
  about_not_contains: String
  about_starts_with: String
  about_not_starts_with: String
  about_ends_with: String
  about_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  publication_every: BookWhereInput
  publication_some: BookWhereInput
  publication_none: BookWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PublisherWhereInput!]
  OR: [PublisherWhereInput!]
  NOT: [PublisherWhereInput!]
}

input PublisherWhereUniqueInput {
  id: ID
}

type Query {
  book(where: BookWhereUniqueInput!): Book
  books(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Book]!
  booksConnection(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookConnection!
  publisher(where: PublisherWhereUniqueInput!): Publisher
  publishers(where: PublisherWhereInput, orderBy: PublisherOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Publisher]!
  publishersConnection(where: PublisherWhereInput, orderBy: PublisherOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PublisherConnection!
  rating(where: RatingWhereUniqueInput!): Rating
  ratings(where: RatingWhereInput, orderBy: RatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rating]!
  ratingsConnection(where: RatingWhereInput, orderBy: RatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RatingConnection!
  review(where: ReviewWhereUniqueInput!): Review
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review]!
  reviewsConnection(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReviewConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Rating {
  id: ID!
  rating: Int!
  rater: User!
  book: Book!
  createdAt: DateTime!
}

type RatingConnection {
  pageInfo: PageInfo!
  edges: [RatingEdge]!
  aggregate: AggregateRating!
}

input RatingCreateInput {
  rating: Int!
  rater: UserCreateOneInput!
  book: BookCreateOneWithoutRatingsInput!
}

input RatingCreateManyWithoutBookInput {
  create: [RatingCreateWithoutBookInput!]
  connect: [RatingWhereUniqueInput!]
}

input RatingCreateWithoutBookInput {
  rating: Int!
  rater: UserCreateOneInput!
}

type RatingEdge {
  node: Rating!
  cursor: String!
}

enum RatingOrderByInput {
  id_ASC
  id_DESC
  rating_ASC
  rating_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RatingPreviousValues {
  id: ID!
  rating: Int!
  createdAt: DateTime!
}

input RatingScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  rating: Int
  rating_not: Int
  rating_in: [Int!]
  rating_not_in: [Int!]
  rating_lt: Int
  rating_lte: Int
  rating_gt: Int
  rating_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [RatingScalarWhereInput!]
  OR: [RatingScalarWhereInput!]
  NOT: [RatingScalarWhereInput!]
}

type RatingSubscriptionPayload {
  mutation: MutationType!
  node: Rating
  updatedFields: [String!]
  previousValues: RatingPreviousValues
}

input RatingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RatingWhereInput
  AND: [RatingSubscriptionWhereInput!]
  OR: [RatingSubscriptionWhereInput!]
  NOT: [RatingSubscriptionWhereInput!]
}

input RatingUpdateInput {
  rating: Int
  rater: UserUpdateOneRequiredInput
  book: BookUpdateOneRequiredWithoutRatingsInput
}

input RatingUpdateManyDataInput {
  rating: Int
}

input RatingUpdateManyMutationInput {
  rating: Int
}

input RatingUpdateManyWithoutBookInput {
  create: [RatingCreateWithoutBookInput!]
  delete: [RatingWhereUniqueInput!]
  connect: [RatingWhereUniqueInput!]
  disconnect: [RatingWhereUniqueInput!]
  update: [RatingUpdateWithWhereUniqueWithoutBookInput!]
  upsert: [RatingUpsertWithWhereUniqueWithoutBookInput!]
  deleteMany: [RatingScalarWhereInput!]
  updateMany: [RatingUpdateManyWithWhereNestedInput!]
}

input RatingUpdateManyWithWhereNestedInput {
  where: RatingScalarWhereInput!
  data: RatingUpdateManyDataInput!
}

input RatingUpdateWithoutBookDataInput {
  rating: Int
  rater: UserUpdateOneRequiredInput
}

input RatingUpdateWithWhereUniqueWithoutBookInput {
  where: RatingWhereUniqueInput!
  data: RatingUpdateWithoutBookDataInput!
}

input RatingUpsertWithWhereUniqueWithoutBookInput {
  where: RatingWhereUniqueInput!
  update: RatingUpdateWithoutBookDataInput!
  create: RatingCreateWithoutBookInput!
}

input RatingWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  rating: Int
  rating_not: Int
  rating_in: [Int!]
  rating_not_in: [Int!]
  rating_lt: Int
  rating_lte: Int
  rating_gt: Int
  rating_gte: Int
  rater: UserWhereInput
  book: BookWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [RatingWhereInput!]
  OR: [RatingWhereInput!]
  NOT: [RatingWhereInput!]
}

input RatingWhereUniqueInput {
  id: ID
}

type Review {
  id: ID!
  review: String!
  reviewer: User!
  book: Book!
  createdAt: DateTime!
}

type ReviewConnection {
  pageInfo: PageInfo!
  edges: [ReviewEdge]!
  aggregate: AggregateReview!
}

input ReviewCreateInput {
  review: String!
  reviewer: UserCreateOneWithoutReviewsInput!
  book: BookCreateOneInput!
}

input ReviewCreateManyWithoutReviewerInput {
  create: [ReviewCreateWithoutReviewerInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateWithoutReviewerInput {
  review: String!
  book: BookCreateOneInput!
}

type ReviewEdge {
  node: Review!
  cursor: String!
}

enum ReviewOrderByInput {
  id_ASC
  id_DESC
  review_ASC
  review_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ReviewPreviousValues {
  id: ID!
  review: String!
  createdAt: DateTime!
}

input ReviewScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  review: String
  review_not: String
  review_in: [String!]
  review_not_in: [String!]
  review_lt: String
  review_lte: String
  review_gt: String
  review_gte: String
  review_contains: String
  review_not_contains: String
  review_starts_with: String
  review_not_starts_with: String
  review_ends_with: String
  review_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [ReviewScalarWhereInput!]
  OR: [ReviewScalarWhereInput!]
  NOT: [ReviewScalarWhereInput!]
}

type ReviewSubscriptionPayload {
  mutation: MutationType!
  node: Review
  updatedFields: [String!]
  previousValues: ReviewPreviousValues
}

input ReviewSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ReviewWhereInput
  AND: [ReviewSubscriptionWhereInput!]
  OR: [ReviewSubscriptionWhereInput!]
  NOT: [ReviewSubscriptionWhereInput!]
}

input ReviewUpdateInput {
  review: String
  reviewer: UserUpdateOneRequiredWithoutReviewsInput
  book: BookUpdateOneRequiredInput
}

input ReviewUpdateManyDataInput {
  review: String
}

input ReviewUpdateManyMutationInput {
  review: String
}

input ReviewUpdateManyWithoutReviewerInput {
  create: [ReviewCreateWithoutReviewerInput!]
  delete: [ReviewWhereUniqueInput!]
  connect: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutReviewerInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutReviewerInput!]
  deleteMany: [ReviewScalarWhereInput!]
  updateMany: [ReviewUpdateManyWithWhereNestedInput!]
}

input ReviewUpdateManyWithWhereNestedInput {
  where: ReviewScalarWhereInput!
  data: ReviewUpdateManyDataInput!
}

input ReviewUpdateWithoutReviewerDataInput {
  review: String
  book: BookUpdateOneRequiredInput
}

input ReviewUpdateWithWhereUniqueWithoutReviewerInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutReviewerDataInput!
}

input ReviewUpsertWithWhereUniqueWithoutReviewerInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutReviewerDataInput!
  create: ReviewCreateWithoutReviewerInput!
}

input ReviewWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  review: String
  review_not: String
  review_in: [String!]
  review_not_in: [String!]
  review_lt: String
  review_lte: String
  review_gt: String
  review_gte: String
  review_contains: String
  review_not_contains: String
  review_starts_with: String
  review_not_starts_with: String
  review_ends_with: String
  review_not_ends_with: String
  reviewer: UserWhereInput
  book: BookWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [ReviewWhereInput!]
  OR: [ReviewWhereInput!]
  NOT: [ReviewWhereInput!]
}

input ReviewWhereUniqueInput {
  id: ID
}

type Subscription {
  book(where: BookSubscriptionWhereInput): BookSubscriptionPayload
  publisher(where: PublisherSubscriptionWhereInput): PublisherSubscriptionPayload
  rating(where: RatingSubscriptionWhereInput): RatingSubscriptionPayload
  review(where: ReviewSubscriptionWhereInput): ReviewSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  books(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Book!]
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  books: BookCreateManyWithoutAuthorsInput
  reviews: ReviewCreateManyWithoutReviewerInput
}

input UserCreateManyWithoutBooksInput {
  create: [UserCreateWithoutBooksInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutReviewsInput {
  create: UserCreateWithoutReviewsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBooksInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  reviews: ReviewCreateManyWithoutReviewerInput
}

input UserCreateWithoutReviewsInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  books: BookCreateManyWithoutAuthorsInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  books: BookUpdateManyWithoutAuthorsInput
  reviews: ReviewUpdateManyWithoutReviewerInput
}

input UserUpdateInput {
  firstName: String
  lastName: String
  email: String
  password: String
  books: BookUpdateManyWithoutAuthorsInput
  reviews: ReviewUpdateManyWithoutReviewerInput
}

input UserUpdateManyDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
}

input UserUpdateManyMutationInput {
  firstName: String
  lastName: String
  email: String
  password: String
}

input UserUpdateManyWithoutBooksInput {
  create: [UserCreateWithoutBooksInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutBooksInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutBooksInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutReviewsInput {
  create: UserCreateWithoutReviewsInput
  update: UserUpdateWithoutReviewsDataInput
  upsert: UserUpsertWithoutReviewsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutBooksDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  reviews: ReviewUpdateManyWithoutReviewerInput
}

input UserUpdateWithoutReviewsDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  books: BookUpdateManyWithoutAuthorsInput
}

input UserUpdateWithWhereUniqueWithoutBooksInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutBooksDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutReviewsInput {
  update: UserUpdateWithoutReviewsDataInput!
  create: UserCreateWithoutReviewsInput!
}

input UserUpsertWithWhereUniqueWithoutBooksInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutBooksDataInput!
  create: UserCreateWithoutBooksInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  books_every: BookWhereInput
  books_some: BookWhereInput
  books_none: BookWhereInput
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`