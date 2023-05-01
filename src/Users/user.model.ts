import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';



@Entity({ name: 'users' })
export class User  {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    Name: string;

    @Column()
    Surname: string;

    @Column()
    Address: string;

    @Column()
    PhoneNumber: string;

    @Column()
    Email: string;

    @Column()
    OrderId: number;

}