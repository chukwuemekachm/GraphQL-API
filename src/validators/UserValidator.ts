import { Length, IsEmail, IsOptional, IsAlphanumeric } from "class-validator";

interface IUserValidatorPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export class UserValidator implements IUserValidatorPayload {
  @IsOptional()
  @Length(2, 50)
  firstName: string;

  @IsOptional()
  @Length(2, 50)
  lastName: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsAlphanumeric()
  @Length(8, 20)
  password: string;

  constructor({ firstName, lastName, email, password }: IUserValidatorPayload) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}
