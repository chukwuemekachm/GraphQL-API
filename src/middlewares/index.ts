import { IMiddlewareGenerator } from 'graphql-middleware';

import permissionsMiddleware from './permissions';

const middlewares: IMiddlewareGenerator<any, any, any>[] = [
  permissionsMiddleware,
];

export default middlewares;
