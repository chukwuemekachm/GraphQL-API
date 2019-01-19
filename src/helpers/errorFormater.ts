import { GraphQLError, SourceLocation, ASTNode } from "graphql";

import FormatedError, { IErrorState } from "../errors/FormatedError";

interface IDefaultError {
  state: IErrorState;
  message: string;
  locations: ReadonlyArray<SourceLocation> | undefined;
  path: ReadonlyArray<string | number> | undefined;
  nodes: ReadonlyArray<ASTNode> | undefined;
  stack?: string | undefined;
}

const errorFormater = (error: GraphQLError): IDefaultError => {
  const { state } = <FormatedError>error.originalError;
  return {
    ...error,
    state: state,
  };
};

export default errorFormater;
