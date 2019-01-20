import * as bcrypt from 'bcryptjs';

import { IAuthMutation } from '../../types/IAuthMutation';
import { IContext } from '../../types/IContext';
import { generateToken } from '../../helpers/jwtHelper';
import validateRequest, { validationMessage } from '../../validators';
import { UserValidator } from '../../validators/UserValidator';
import FormatedError from '../../errors/FormatedError';

class AuthMutation implements IAuthMutation {
  /**
   * @description Signs up a user to the platform
   * Returning the user's token and profile
   *
   * @param {object} parent The previous GraphQL object
   * @param {object} args The request payload
   * @param {object} context The request context
   *
   * @returns {object}
   */
  public static signup = async (
    parent: any,
    { user: userInput }: any,
    { prisma }: IContext,
  ) => {
    try {
      const { firstName, lastName, email, password } = userInput;
      const errors = await validateRequest(UserValidator, userInput);
      if (errors) {
        throw new FormatedError(validationMessage, errors);
      }

      const user = await prisma.user({ email });
      if (!user) {
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = await prisma.createUser({
          email,
          password: passwordHash,
          firstName,
          lastName,
        });
        const token = generateToken({ email, id: newUser.id });

        return {
          token,
          User: newUser,
        };
      }
      throw new FormatedError('User with email exists', {
        email: [`A user with your email: ${email} already exists`],
      });
    } catch (err) {
      throw err;
    }
  };

  /**
   * @description Login's in a user on the platform
   * Returning the user's token and profile
   *
   * @param {object} parent The previous GraphQL object
   * @param {object} args The request payload
   * @param {object} context The request context
   *
   * @returns {object}
   */
  public static login = async (
    parent: any,
    { user: userInput }: any,
    { prisma }: IContext,
  ) => {
    try {
      const { email, password } = userInput;
      const user = await prisma.user({ email });
      if (!user) {
        throw new FormatedError('Invaild credentials', {
          email: ['Invalid email or password'],
          password: ['Invalid email or password'],
        });
      }

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new FormatedError('Invaild credentials', {
          email: ['Invalid email or password'],
          password: ['Invalid email or password'],
        });
      }
      const token = generateToken({ email, id: user.id });

      return {
        token,
        User: user,
      };
    } catch (err) {
      throw err;
    }
  };
}

export default AuthMutation;
