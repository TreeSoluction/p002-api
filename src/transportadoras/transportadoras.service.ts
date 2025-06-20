import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GenericPrismaService } from 'src/prisma/genetic.prisma.service';
import { CreateTransportadoraDto } from './dto/create-transportadora.dto';
import { UpdateTransportadoraDto } from './dto/update-transportadora.dto';

@Injectable()
export class TransportadorasService extends GenericPrismaService<CreateTransportadoraDto, UpdateTransportadoraDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'transportadoras');
  }
}