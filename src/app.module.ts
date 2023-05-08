import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Catalog } from './Catalog/catalog.model';
import { CatalogModule } from './Catalog/catalog.module';
import { Order } from './Orders/order.model';
import { OrderModule } from './Orders/order.module';
import { User } from './Users/user.model';
import { UserModule } from './Users/user.module';
import { AllModule } from './AllEnteties/all.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Vikuk2003#',
      database: 'web_agency',
      entities: [Catalog, Order, User],
      synchronize: true,
    }),

    CatalogModule,
    OrderModule,
    UserModule,
    AllModule

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
