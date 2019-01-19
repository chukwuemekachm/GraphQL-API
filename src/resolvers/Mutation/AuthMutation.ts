import { IAuthMutation } from "../../types/IAuthMutation";
import { IContext } from "../../types/IContext";
import { generateToken } from "../../helpers/jwtHelper";
import validateRequest, { validationMessage } from "../../validators";
import { UserValidator } from "../../validators/UserValidator";
import FormatedError from "../../errors/FormatedError";

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
  public static signup = async (parent: any, args: any, { prisma }: IContext) => {
    try {
      const { firstName, lastName, email, password } = args.user;
      const errors = await validateRequest(UserValidator, args.user);
      if (errors) {
        throw new FormatedError(validationMessage, errors);
      }
      const user = await prisma.user({ email });
      if (!user) {
        const newUser = await prisma.createUser({
          email,
          password,
          firstName,
          lastName,
        });
        const token = generateToken({ email, id: newUser.id });

        return {
          token,
          User: newUser,
        };
      }
      throw new FormatedError('User with email exists', { email: [`A user with your email: ${email} already exists`] });
    } catch (err) {
      throw err;
    }
  }
}

export default AuthMutation;
