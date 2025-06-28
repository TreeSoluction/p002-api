import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GenericPrismaService } from 'src/prisma/genetic.prisma.service';
import { CreateFreteiroDto } from './dto/create-freteiro.dto';
import { UpdateFreteiroDto } from './dto/update-freteiro.dto';

@Injectable()
export class FreteirosService extends GenericPrismaService<CreateFreteiroDto, UpdateFreteiroDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'freteiros');
  }
}