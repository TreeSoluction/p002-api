import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GenericPrismaService } from 'src/prisma/genetic.prisma.service';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';

@Injectable()
export class LojasService extends GenericPrismaService<CreateLojaDto, UpdateLojaDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'lojas');
  }
}