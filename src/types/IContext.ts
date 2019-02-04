import { Prisma, User } from '../prisma/generated/prisma-client';
import { Request } from 'express-serve-static-core';

export interface IContext {
  prisma: Prisma;
  request: Request;
  user: Partial<User>;
}
