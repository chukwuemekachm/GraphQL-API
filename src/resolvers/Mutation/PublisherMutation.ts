import { IContext } from '../../types/IContext';
import FormatedError from '../../errors/FormatedError';
import { PublisherValidator } from '../../validators/PublisherValidator';
import validateRequest, {
  IValidationErrors,
  validationMessage,
} from '../../validators';
import { Publisher } from '../../prisma/generated/prisma-client';
import { MutationResolvers } from '../../types/graphqlgen';

class PublisherMutation {
  /**
   * @description Creates a new publisher on the platform
   * Returning the newly created publisher
   *
   * @param {object} parent The previous GraphQL object
   * @param {object} args The request payload
   * @param {object} context The request context
   *
   * @returns {object}
   */
  public static createPublisher: MutationResolvers.CreatePublisherResolver = async (
    parent: undefined,
    { publisher: publisherInput }: any,
    { prisma }: IContext,
  ): Promise<Publisher> => {
    try {
      const { name, about, address } = publisherInput;
      const errors: IValidationErrors | boolean = await validateRequest(
        PublisherValidator,
        publisherInput,
      );
      if (errors) {
        throw new FormatedError(validationMessage, errors);
      }

      const publisher = await prisma.$exists.publisher({
        OR: [{ name_contains: name }, { about_contains: about }],
      });
      if (!publisher) {
        const newPublisher = await prisma.createPublisher({
          name,
          about,
          address,
        });
        return newPublisher;
      }

      throw new FormatedError('Publisher with similar information exist', {
        name: ['A publisher with similar name exists'],
        about: ['A publisher with similar details exists'],
      });
    } catch (err) {
      throw err;
    }
  };
}

export default PublisherMutation;
