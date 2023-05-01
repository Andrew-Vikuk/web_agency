import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AllService } from './all.service';
import { Catalog } from '../Catalog/catalog.model';
import { User } from '../Users/user.model';


@Controller('all')
export class AllController {
    constructor (private allService: AllService){}

    @Get(':id')
    async getUsersByCatalogId(@Param('id') id: number): Promise<User[]> {
        return this.allService.getUsersByCatalogId(id);
      }
    }