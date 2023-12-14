import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  type: string;

  @Column()
  year: number;

  @Column()
  rating: string;

  @Column()
  score: string;

  @Column()
  country: string;

  @Column()
  image: string;
}
