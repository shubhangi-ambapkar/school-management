import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentService } from './student.service';
import { CreateStudentDTO } from './dto/create-student.dto';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query((returns) => [StudentType])
  getAllStudents() {
    return this.studentService.getAllStudents();
  }

  @Query((returns) => StudentType)
  getStudentById(@Args('id') id: string) {
    return this.studentService.getStudentByID(id);
  }

  @Mutation((returns) => StudentType)
  createStudent(@Args('input') createStudent: CreateStudentDTO) {
    return this.studentService.createStudent(createStudent);
  }
}
