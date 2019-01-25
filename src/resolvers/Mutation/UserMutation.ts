import { IUserMutation } from '../../types/IUserMutation';
import { MutationResolvers } from '../../types/graphqlgen';
import { IContext } from '../../types/IContext';
import { User } from '../../prisma/generated/prisma-client';
import validateRequest, {
  IValidationErrors,
  validationMessage,
} from '../../validators';
import { UserValidator } from '../../validators/UserValidator';
import FormatedError from '../../errors/FormatedError';

class UserMutation implements IUserMutation {
  /**
   * @description Creates a new author on the platform
   * Returning the newly created author
   *
   * @param {object} parent The previous GraphQL object
   * @param {object} args The request payload
   * @param {object} context The request context
   *
   * @returns {object}
   */
  public static createAuthor: MutationResolvers.CreateAuthorResolver = async (
    parent: undefined,
    { user: authorInput }: any,
    { prisma }: IContext,
  ): Promise<User> => {
    try {
      const { firstName, lastName, email } = authorInput;
      const errors: IValidationErrors | boolean = await validateRequest(
        UserValidator,
        authorInput,
      );
      if (errors) {
        throw new FormatedError(validationMessage, errors);
      }

      const user = await prisma.user({ email });
      if (!user) {
        const newUser: User = await prisma.createUser({
          email,
          firstName,
          lastName,
          type: 'AUTHOR',
        });
        return newUser;
      }

      throw new FormatedError('User with email exists', {
        email: [`A user with your email: ${email} already exists`],
      });
    } catch (err) {
      throw err;
    }
  };
}

export default UserMutation;
