import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GenericPrismaService } from 'src/prisma/genetic.prisma.service';
import { CreateExcursoesDto } from './dto/create-excursoe.dto';
import { UpdateExcursoeDto } from './dto/update-excursoe.dto';

@Injectable()
export class ExcursoesService extends GenericPrismaService<CreateExcursoesDto, UpdateExcursoeDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'excursoes');
  }
}