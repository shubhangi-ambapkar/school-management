import { Injectable } from '@nestjs/common';
import { Repository, In } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentDTO } from './dto/create-student.dto';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepo: Repository<Student>,
  ) {}

  async getAllStudents(): Promise<Student[]> {
    return await this.studentRepo.find();
  }

  async getStudentByID(id: string): Promise<Student> {
    return await this.studentRepo.findOneBy({ id: id });
  }

  async createStudent(input: CreateStudentDTO): Promise<Student> {
    const result = this.studentRepo.create({
      ...input,
      _id: uuid(),
    });
    return await this.studentRepo.save(result);
  }

  async getManyStudents(studentIds: string[]): Promise<Student[]> {
    let result;
    if (Array.isArray(studentIds)) {
      result = await this.studentRepo.find({
        where: {
          id: { $in: studentIds } as any,
        },
      });
    }
    return result;
  }
}
