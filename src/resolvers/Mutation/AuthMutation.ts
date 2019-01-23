import * as bcrypt from 'bcryptjs';

import { IAuthMutation } from '../../types/IAuthMutation';
import { IContext } from '../../types/IContext';
import { generateToken } from '../../helpers/jwtHelper';
import validateRequest, {
  validationMessage,
  IValidationErrors,
} from '../../validators';
import { UserValidator } from '../../validators/UserValidator';
import FormatedError from '../../errors/FormatedError';
import { AuthResponse, User } from '../../types/types';
import { MutationResolvers } from '../../types/graphqlgen';

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
  public static signup: MutationResolvers.SignupResolver = async (
    parent: undefined,
    { user: userInput }: any,
    { prisma }: IContext,
  ): Promise<AuthResponse> => {
    try {
      const { firstName, lastName, email, password } = userInput;
      const errors: IValidationErrors | boolean = await validateRequest(
        UserValidator,
        userInput,
      );
      if (errors) {
        throw new FormatedError(validationMessage, errors);
      }

      const user = await prisma.user({ email });
      if (!user) {
        const passwordHash: string = await bcrypt.hash(password, 10);
        const newUser: Partial<User> = await prisma.createUser({
          email,
          password: passwordHash,
          firstName,
          lastName,
        });
        const token = generateToken({ email, id: newUser.id });

        return {
          token,
          user: newUser,
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
  public static login: MutationResolvers.LoginResolver = async (
    parent: undefined,
    { user: userInput }: any,
    { prisma }: IContext,
  ): Promise<AuthResponse> => {
    try {
      const { email, password } = userInput;
      const user: Partial<User> = await prisma.user({ email });
      if (!user) {
        throw new FormatedError('Invaild credentials', {
          email: ['Invalid email or password'],
          password: ['Invalid email or password'],
        });
      }

      const valid = await bcrypt.compare(password, <string>user.password);
      if (!valid) {
        throw new FormatedError('Invaild credentials', {
          email: ['Invalid email or password'],
          password: ['Invalid email or password'],
        });
      }
      const token = generateToken({ email, id: user.id });

      return {
        token,
        user: user,
      };
    } catch (err) {
      throw err;
    }
  };
}

export default AuthMutation;
