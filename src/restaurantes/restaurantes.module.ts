import { Module } from '@nestjs/common';
import { RestaurantesService } from './restaurantes.service';
import { RestaurantesController } from './restaurantes.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RestaurantesController],
  providers: [RestaurantesService, PrismaService],
})
export class RestaurantesModule { }
