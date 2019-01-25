import { GraphQLError, SourceLocation, ASTNode } from 'graphql';

import FormatedError, { IErrorState } from '../errors/FormatedError';

interface IDefaultError {
  state: IErrorState | undefined;
  message: string;
  locations: ReadonlyArray<SourceLocation> | undefined;
  path: ReadonlyArray<string | number> | undefined;
  nodes: ReadonlyArray<ASTNode> | undefined;
  stack?: string | undefined;
}

/**
 * @description Formats all errors to a uniform format
 * Returning a uniform error object
 *
 * @param {object} error The error object supplied by GrapgQL
 *
 * @returns {object}
 */
const errorFormater = (error: GraphQLError): IDefaultError => {
  let state;
  const formatedError: FormatedError = <FormatedError>error.originalError;
  if (formatedError) ({ state } = formatedError);
  return {
    ...error,
    state,
  };
};

export default errorFormater;
