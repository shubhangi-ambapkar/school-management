import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateLessonDto {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;
}
