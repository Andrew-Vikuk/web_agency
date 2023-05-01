import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Catalog } from './catalog.model';

@Injectable()
export class CatalogService {
    constructor(
        @InjectRepository(Catalog) private catalogRepository: Repository<Catalog>
      ) {}

      getAllCatalog() {
        return this.catalogRepository.find();
      }

      createCatalog(body) {
        const newCatalog = this.catalogRepository.create(body);
        return this.catalogRepository.save(newCatalog);
      }

      deleteCatalog(id: number) {
        return this.catalogRepository.delete({ id });
      }

      getCatalog(id) {
        return this.catalogRepository.findOneBy({id: id});
      }
}