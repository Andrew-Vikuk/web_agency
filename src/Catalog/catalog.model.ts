import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';



@Entity({ name: 'catalog' })
export class Catalog  {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    Title: string;

    @Column()
    ProjectType: string;

    @Column()
    PageCount: number;

    @Column()
    Price: number;

}