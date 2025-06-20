import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GenericPrismaService } from 'src/prisma/genetic.prisma.service';
import { UpdateQuiosqueDto } from './dto/update-quiosque.dto';
import { CreateQuiosqueDto } from './dto/create-quiosque.dto';

@Injectable()
export class QuiosquesService extends GenericPrismaService<CreateQuiosqueDto, UpdateQuiosqueDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'quiosques');
  }
}