import {
  Length,
  IsOptional,
  IsArray,
  IsString,
  IsPositive,
  IsDateString,
  IsNumber,
} from 'class-validator';

interface IBookValidatorPayload {
  title: string;
  description: string;
  publishers: string[];
  pages: number;
  publishDateTime: string;
  authors: string[];
  isbnNo: string;
}

export class BookValidator implements IBookValidatorPayload {
  @IsString()
  @Length(5, 250)
  title: string;

  @IsString()
  @Length(5, 250)
  description: string;

  @IsOptional()
  @IsArray()
  publishers: string[];

  @IsOptional()
  @IsNumber()
  @IsPositive()
  pages: number;

  @IsDateString()
  publishDateTime: string;

  @IsArray()
  authors: string[];

  @IsOptional()
  @IsString()
  isbnNo: string;

  constructor({
    title,
    description,
    publishers,
    pages,
    publishDateTime,
    authors,
    isbnNo,
  }: IBookValidatorPayload) {
    this.title = title;
    this.description = description;
    this.publishers = publishers;
    this.pages = pages;
    this.publishDateTime = publishDateTime;
    this.authors = authors;
    this.isbnNo = isbnNo;
  }
}
