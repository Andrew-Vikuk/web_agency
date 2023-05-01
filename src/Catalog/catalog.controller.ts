import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CatalogService } from './catalog.service';

@Controller('catalog')
export class CatalogController {
    constructor (private catalogService: CatalogService){}

    @Get()
    getAll(){
        return this.catalogService.getAllCatalog();
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.catalogService.getCatalog(id);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.catalogService.deleteCatalog(id);
     }

     @Post()
    createCatalog(@Body() body){
        return this.catalogService.createCatalog(body)
    }
}