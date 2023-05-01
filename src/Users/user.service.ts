import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.model';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
      ) {}

      getAllUser() {
        return this.userRepository.find();
      }

      createUser(body) {
        const newUser = this.userRepository.create(body);
        return this.userRepository.save(newUser);
      }

      deleteUser(id: number) {
        return this.userRepository.delete({ id });
      }

      getUser(id) {
        return this.userRepository.findOneBy({id: id});
      }
}