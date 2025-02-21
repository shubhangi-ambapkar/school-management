import { Field, ID, InputType } from '@nestjs/graphql';

@InputType('AssignStudentsToLesson')
export class AssignStudentsToLesson {
  @Field((type) => ID)
  lessonId: string;

  @Field((type) => [ID])
  studentsId: string[];
}
