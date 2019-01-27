import { Prisma } from './prisma/generated/prisma-client/index';

/**
 * @description Checks to see if all the user ids provided exist
 * Returns an array of non existing ids with a message
 *
 * @param {array} authors The array of author ids to be validated
 * @param {object} prisma The prisma object instance
 *
 * @returns {array | boolean}
 */
export const checkAuthors = async (authors: string[], prisma: Prisma) => {
  try {
    const result: string[] = [];
    await Promise.all(
      authors.map(async (authorId: string) => {
        const author = await prisma.$exists.user({
          id: authorId,
          type: 'AUTHOR',
        });
        if (!author) result.push(`Author with id: ${authorId} does not exist`);
      }),
    );
    if (result[0]) return result;
    return false;
  } catch (err) {
    throw err;
  }
};

/**
 * @description Checks to see if all the publisher ids provided exist
 * Returns an array of non existing ids with a message
 *
 * @param {array} publishers The array of publisher ids to be validated
 * @param {object} prisma The prisma object instance
 *
 * @returns {array | boolean}
 */
export const checkPublishers = async (publishers: string[], prisma: Prisma) => {
  try {
    const result: string[] = [];
    await Promise.all(
      publishers.map(async (publishersId: string) => {
        const author = await prisma.$exists.publisher({ id: publishersId });
        if (!author)
          result.push(`Publisher with id: ${publishersId} does not exist`);
      }),
    );
    if (result[0]) return result;
    return false;
  } catch (err) {
    throw err;
  }
};
