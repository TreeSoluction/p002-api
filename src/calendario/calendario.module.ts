import { Module } from '@nestjs/common';
import { CalendarioService } from './calendario.service';
import { CalendarioController } from './calendario.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CalendarioController],
  providers: [CalendarioService, PrismaService],
})
export class CalendarioModule { }
