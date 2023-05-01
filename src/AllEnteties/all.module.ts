import { forwardRef, Module } from '@nestjs/common';
import { AllController } from './all.controller';
import { AllService } from './all.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../Users/user.model';
import { Catalog } from '../Catalog/catalog.model';
import { Order } from '../Orders/order.model';

@Module({
    imports: [TypeOrmModule.forFeature([User, Catalog, Order])],
    controllers: [AllController],
    providers: [AllService],
  })

export class AllModule {}