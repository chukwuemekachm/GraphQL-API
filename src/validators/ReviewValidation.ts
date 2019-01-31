import { Length, IsOptional, IsString } from 'class-validator';

interface IReviewValidatorPayload {
  review: string;
  reviewer: string;
  book: string;
}

export class ReviewValidator implements IReviewValidatorPayload {
  @IsOptional()
  @IsString()
  @Length(5, 250)
  review: string;

  @IsOptional()
  @IsString()
  @Length(5, 250)
  reviewer: string;

  @IsOptional()
  @IsString()
  @Length(5, 250)
  book: string;

  constructor({ review, reviewer, book }: IReviewValidatorPayload) {
    this.review = review;
    this.reviewer = reviewer;
    this.book = book;
  }
}
