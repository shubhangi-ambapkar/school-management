import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity('Lesson')
export class Lesson {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column({ nullable: true })
  students: string[];
}
