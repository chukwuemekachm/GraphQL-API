import { rule } from 'graphql-shield';
import { Rule } from 'graphql-shield/dist/rules';

import { decodeToken } from '../../helpers/jwtHelper';
import { IContext } from '../../types/IContext';
import { User } from '../../prisma/generated/prisma-client';

/**
 * @description This Rule confirms that a user is authenticated
 *
 * @param {object} parent The parent resolver object
 * @param {object} parent The args resolver object
 * @param {object} parent The context resolver object
 *
 * @returns {boolean}
 */
export const isAuthenticated: Rule = rule()(
  async (parent: any, args: any, context: IContext) => {
    try {
      const decodedToken = decodeToken(context);
      if (!decodedToken) return false;
      context.user = <Partial<User>>decodeToken;
      return true;
    } catch (error) {
      return false;
    }
  },
);
