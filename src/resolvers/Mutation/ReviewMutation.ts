import { MutationResolvers } from '../../types/graphqlgen';
import { IContext } from '../../types/IContext';
import validateRequest, {
  IValidationErrors,
  validationMessage,
} from '../../validators';
import FormatedError from '../../errors/FormatedError';
import { Review } from '../../prisma/generated/prisma-client';
import { IReviewMutation } from '../../types/mutation/IReviewMutation';
import { ReviewValidator } from '../../validators/ReviewValidation';

class ReviewMutation implements IReviewMutation {
  /**
   * @description Creates a new book review on the platform
   * Returning the newly created review and it's relations
   *
   * @param {object} parent The previous GraphQL object
   * @param {object} args The request payload
   * @param {object} context The request context
   *
   * @returns {object}
   */
  public static createReview: MutationResolvers.CreateReviewResolver = async (
    parent: undefined,
    { review: reviewInput }: any,
    { prisma }: IContext,
  ): Promise<Review> => {
    try {
      const { review, reviewer, book } = reviewInput;
      const errors: IValidationErrors | boolean = await validateRequest(
        ReviewValidator,
        reviewInput,
      );
      if (errors) {
        throw new FormatedError(validationMessage, errors);
      }

      const userExists = await prisma.$exists.user({ id: reviewer });
      const bookExists = await prisma.$exists.book({ id: book });
      if (!userExists) {
        throw new FormatedError(`User with id: ${reviewer} does not exist`, {
          reviewer: [`User with id: ${reviewer} does not exist`],
        });
      }
      if (!bookExists) {
        throw new FormatedError(`Book with id: ${book} does not exist`, {
          book: [`Book with id: ${book} does not exist`],
        });
      }

      return prisma.createReview({
        review,
        reviewer: { connect: { id: reviewer } },
        book: { connect: { id: book } },
      });
    } catch (err) {
      throw err;
    }
  };
}

export default ReviewMutation;
