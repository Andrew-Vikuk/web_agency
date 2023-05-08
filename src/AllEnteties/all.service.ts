import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { Catalog } from './catalog.model';
import { User } from '../Users/user.model';
import { Catalog } from '../Catalog/catalog.model';
import { Order } from '../Orders/order.model';
import mysql from 'mysql2/promise';


@Injectable()
export class AllService {
        constructor(
            @InjectRepository(User) private userRepository: Repository<User>,
            @InjectRepository(Order) private orderRepository: Repository<Order>
          ) {}
        
          async getUsersByCatalogId(catalogId: number): Promise<User[]> {
            return this.userRepository
              .createQueryBuilder('u')
              .innerJoin('orders', 'o', 'o.UserId = u.id')
              .innerJoin('catalog', 'c', 'c.id = o.SiteId')
              .where('c.id = :catalogId', { catalogId })
              .getMany();
          }

          async  getUsersWithOrdersAndProjects() {
            const connection = await mysql.createConnection({
              host: 'localhost',
              user: 'root',
              password: 'password',
              database: 'web_agency',
            });
          
            const [rows] = await connection.execute(`
              SELECT *
              FROM Users
              INNER JOIN Orders ON Orders.UserId = Users.id
              INNER JOIN Catalog ON Catalog.id = Orders.SiteId
            `);
          
            connection.end();
          
            return rows;
          }
          
          
          
          

          async getOrdersByUserId(userId: number): Promise<Order[]> {
            const orders = await this.orderRepository.find({
              where: { UserId: userId },
            });
            return orders;
          }

          async getOrdersBySiteId(siteId: number): Promise<Order[]> {
            const orders = await this.orderRepository.find({
              where: { SiteId: siteId },
            });
            return orders;
          }
          
          
        }