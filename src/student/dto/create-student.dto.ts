import { Field, ID, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateStudentDTO {
  @Field((type) => ID)
  id: string;

  @MinLength(4)
  @Field()
  firstName: string;

  @MinLength(4)
  @Field()
  lastName: string;
}
