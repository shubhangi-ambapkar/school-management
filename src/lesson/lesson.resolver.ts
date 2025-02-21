import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { LessonService } from './lesson.service';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { AssignStudentsToLesson } from './dto/assign-students-to-lesson.dto';
import { Lesson } from './lesson.entity';
import { StudentService } from 'src/student/student.service';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(
    private readonly lessonService: LessonService,
    private readonly studentService: StudentService,
  ) {}
  @Query((returns) => [LessonType])
  getAlllessons() {
    return this.lessonService.getAllLessons();
  }

  @Query((returns) => LessonType)
  getLessonById(@Args('id') id: string) {
    return this.lessonService.getLessonById(id);
  }

  @Mutation((returns) => LessonType)
  createLesson(@Args('input') createLessonDto: CreateLessonDto) {
    return this.lessonService.createLesson(createLessonDto);
  }

  @Mutation((returns) => LessonType)
  updateLesson(
    @Args('id') id: string,
    @Args('input') updateLessonDto: UpdateLessonDto,
  ) {
    return this.lessonService.updateLesson(id, updateLessonDto);
  }

  @Mutation((returns) => Boolean)
  deleteLesson(@Args('id') id: string) {
    return this.lessonService.deleteLesson(id);
  }

  @Mutation((returns) => LessonType)
  assignStudentsToLesson(
    @Args('input') assignStudentsToLesson: AssignStudentsToLesson,
  ) {
    return this.lessonService.assignStudentsToLesson(assignStudentsToLesson);
  }

  @ResolveField()
  async students(@Parent() lesson: Lesson) {
    return this.studentService.getManyStudents(lesson.students);
  }
}
