import { validate } from 'class-validator';

interface IPayload {
  [property: string]: any;
}

export interface IValidationErrors {
  [property: string]: string[];
}

export const validationMessage: string = 'Some fields are failing validation';

/**
 * @description Validates objects with key value pairs
 * And returns a false or errors object depending on the state
 *
 * @param {object} Validator The validator schema to be used
 * @param {object} payload The object to be validated
 * @param {string} action The type of validation to be performed
 *
 * @returns {boolean | object}
 */
const validateRequest = async (
  Validator: any,
  payload: IPayload,
  action?: string,
): Promise<boolean | IValidationErrors> => {
  let resource = new Validator(payload);
  let validationErrors = {};

  Object.entries(payload).forEach(([key, value]) => {
    resource[key] =
      typeof value === 'string' ? value.replace(/  +/g, '').trim() : value;
  });

  const errors = await validate(resource, {
    validationError: { target: false },
    skipMissingProperties: action === 'update' ? true : false,
  });

  if (errors.length === 0) {
    return false;
  }

  for (let error of errors) {
    validationErrors = {
      ...validationErrors,
      [error.property]: Object.entries(error.constraints).map(
        ([, value]) => value,
      ),
    };
  }

  return validationErrors;
};

export default validateRequest;
