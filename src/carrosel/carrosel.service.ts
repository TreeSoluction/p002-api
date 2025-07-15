import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GenericPrismaService } from 'src/prisma/genetic.prisma.service';
import { CreateEstacionamentoDto } from './dto/create-estacionamento.dto';
import { UpdateEstacionamentoDto } from './dto/update-estacionamento.dto';

@Injectable()
export class CarroselService extends GenericPrismaService<CreateEstacionamentoDto, UpdateEstacionamentoDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'carrosel');
  }
}