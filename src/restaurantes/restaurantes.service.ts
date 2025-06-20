import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GenericPrismaService } from 'src/prisma/genetic.prisma.service';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';

@Injectable()
export class RestaurantesService extends GenericPrismaService<CreateRestauranteDto, UpdateRestauranteDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'restaurantes');
  }
}