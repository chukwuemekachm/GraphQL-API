import { Length, IsString } from 'class-validator';

interface IPublisherValidatorPayload {
  name: string;
  address: string;
  about: string;
}

export class PublisherValidator implements IPublisherValidatorPayload {
  @IsString()
  @Length(2, 50)
  name: string;

  @IsString()
  @Length(2, 50)
  address: string;

  @IsString()
  @Length(10, 250)
  about: string;

  constructor({ name, address, about }: IPublisherValidatorPayload) {
    this.name = name;
    this.about = about;
    this.address = address;
  }
}
