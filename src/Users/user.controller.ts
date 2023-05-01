import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor (private userService: UserService){}

    @Get()
    getAll(){
        return this.userService.getAllUser();
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.userService.getUser(id);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.userService.deleteUser(id);
     }

     @Post()
    createUser(@Body() body){
        return this.userService.createUser(body)
    }
}