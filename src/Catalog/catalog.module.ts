import { forwardRef, Module } from '@nestjs/common';
import { CatalogController } from './catalog.controller';
import { Catalog } from './catalog.model';
import { CatalogService } from './catalog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
    controllers: [CatalogController],
    providers: [CatalogService],
    imports: [
      TypeOrmModule.forFeature([Catalog])
    ],
      exports: [
          CatalogService,
      ]
  })

export class CatalogModule {}