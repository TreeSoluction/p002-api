import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GenericPrismaService } from 'src/prisma/genetic.prisma.service';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';

@Injectable()
export class CidadesService extends GenericPrismaService<CreateCidadeDto, UpdateCidadeDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'cidades');
  }
}