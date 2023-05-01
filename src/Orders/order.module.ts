import { forwardRef, Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { Order } from './order.model';
import { orderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
    controllers: [OrderController],
    providers: [orderService],
    imports: [
      TypeOrmModule.forFeature([Order])
    ],
      exports: [
          orderService,
      ]
  })

export class OrderModule {}