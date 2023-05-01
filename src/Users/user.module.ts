import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { User } from './user.model';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
    controllers: [UserController],
    providers: [UserService],
    imports: [
      TypeOrmModule.forFeature([User])
    ],
      exports: [
          UserService,
      ]
  })

export class UserModule {}