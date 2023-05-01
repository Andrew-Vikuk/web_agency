import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';



@Entity({ name: 'orders' })
export class Order  {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    UserId: number;

    @Column()
    SiteId: number;

    @Column()
    EstimateDays: number;

}