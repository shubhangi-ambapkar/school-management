import { Field, ID, InputType } from "@nestjs/graphql";
import { IsDateString, MinLength } from "class-validator";

@InputType()
export class CreateLessonDto {
  @Field((type) => ID)
  id: string;

  @MinLength(1)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsDateString()
  @Field()
  endDate: string;
}
