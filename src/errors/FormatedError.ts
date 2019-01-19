import { GraphQLError } from "graphql";

export interface IErrorState {
  [propertyName: string]: [];
}

class FormatedError extends GraphQLError {
  readonly state: any;

  constructor(message: string, errors: any) {
    super(message);
    this.state = errors;
  }
}

export default FormatedError;
