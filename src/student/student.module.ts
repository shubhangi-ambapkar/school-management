import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { StudentResolver } from './student.resolver';

@Module({
  providers: [StudentResolver, StudentService],
  imports: [TypeOrmModule.forFeature([Student])],
  exports: [StudentService]
})
export class StudentModule {}
