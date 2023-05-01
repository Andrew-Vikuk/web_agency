import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { Catalog } from './catalog.model';
import { User } from '../Users/user.model';
import { Catalog } from '../Catalog/catalog.model';

@Injectable()
export class AllService {
        constructor(
            @InjectRepository(User) private userRepository: Repository<User>
          ) {}
        
          async getUsersByCatalogId(catalogId: number): Promise<User[]> {
            return this.userRepository
              .createQueryBuilder('u')
              .innerJoin('orders', 'o', 'o.UserId = u.id')
              .innerJoin('catalog', 'c', 'c.id = o.SiteId')
              .where('c.id = :catalogId', { catalogId })
              .getMany();
          }
        }