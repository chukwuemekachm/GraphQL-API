type DateTime = string;
type ID = string;

export interface AuthResponse {
  token: string;
  user: Partial<User>;
}

export interface User {
  id: ID;
  firstName: string;
  lastName: string;
  email: string;
  books: Book[];
  reviews: Review[];
  password: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface Publisher {
  id: ID;
  name: string;
  about: string;
  address: string;
  publication: Book[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface Book {
  id: ID;
  title: string;
  description: string;
  publishers: Publisher[];
  pages: number;
  publishDateTime: DateTime;
  authors: User[];
  ratings: Rating[];
  isbnNo: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface Review {
  id: ID;
  review: string;
  reviewer: User;
  book: Book;
  createdAt: DateTime;
}

export interface Rating {
  id: ID;
  rating: number;
  rater: User;
  book: Book;
  createdAt: DateTime;
}
