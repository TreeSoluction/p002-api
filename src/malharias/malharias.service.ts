import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GenericPrismaService } from 'src/prisma/genetic.prisma.service';
import { CreateMalhariaDto } from './dto/create-malharia.dto';
import { UpdateMalhariaDto } from './dto/update-malharia.dto';

@Injectable()
export class MalhariasService extends GenericPrismaService<CreateMalhariaDto, UpdateMalhariaDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'malharias');
  }
}