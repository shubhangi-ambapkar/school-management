import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuid } from 'uuid';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepo: Repository<Lesson>,
  ) {}

  async getAllLessons(): Promise<Lesson[]> {
    return await this.lessonRepo.find();
  }

  async getLessonById(id: string): Promise<Lesson> {
    return await this.lessonRepo.findOneBy({ id: id });
  }

  async createLesson(createLessonDto: CreateLessonDto): Promise<Lesson> {
    const result = await this.lessonRepo.create({
      ...createLessonDto,
      _id: uuid(),
    });

    return this.lessonRepo.save(result);
  }

  // async updateLesson(
  //   id: string,
  //   updateLessonDto: UpdateLessonDto,
  // ): Promise<Lesson> {
  //   const lesson = await this.getLessonById(id);
  //   if (!lesson) {
  //     throw new NotFoundException();
  //   }
  //   Object.assign(lesson, updateLessonDto);
  //   return await this.lessonRepo.save(lesson);
  // }

  // async deleteLesson(id: string): Promise<boolean> {
  //   const lesson = await this.getLessonById(id);
  //   if (!lesson) {
  //     throw new NotFoundException();
  //   }
  //   const result = await this.lessonRepo.delete(id);
  //   return result.affected > 0 ? true : false;
  // }
}
