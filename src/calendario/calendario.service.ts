import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GenericPrismaService } from 'src/prisma/genetic.prisma.service';
import { CreateCalendarioDto } from './dto/create-calendario.dto';
import { UpdateCalendarioDto } from './dto/update-calendario.dto';

@Injectable()
export class CalendarioService extends GenericPrismaService<CreateCalendarioDto, UpdateCalendarioDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'calendario');
  }
}