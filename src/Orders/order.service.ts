import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.model';

@Injectable()
export class orderService {
    constructor(
        @InjectRepository(Order) private orderRepository: Repository<Order>
      ) {}

      getAllOrder() {
        return this.orderRepository.find();
      }

      createOrder(body) {
        const newOrder = this.orderRepository.create(body);
        return this.orderRepository.save(newOrder);
      }

      deleteOrder(id: number) {
        return this.orderRepository.delete({ id });
      }

      getOrder(id) {
        return this.orderRepository.findOneBy({id: id});
      }
}