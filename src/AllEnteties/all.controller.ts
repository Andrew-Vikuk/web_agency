import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AllService } from './all.service';
import { Catalog } from '../Catalog/catalog.model';
import { User } from '../Users/user.model';
import { Order } from '../Orders/order.model';


@Controller('all')
export class AllController {
    constructor (private allService: AllService){}

    @Get(':id')
    async getUsersByCatalogId(@Param('id') id: number): Promise<User[]> {
        return this.allService.getUsersByCatalogId(id);
      }

      @Get('total')
      async getTotalOrdersByUser() {
        return await this.allService.getUsersWithOrdersAndProjects();
      }

      @Get(':id/orders')
      async getOrdersByUserId(@Param('id') id: number): Promise<Order[]> {
        return await this.allService.getOrdersByUserId(id);
      }

      @Get(':siteId/orders-site')
      async getOrdersBySiteId(@Param('siteId') siteId: number): Promise<Order[]> {
        const orders = await this.allService.getOrdersBySiteId(siteId);
        return orders;
      }
    }