import { Module } from '@nestjs/common';
import { ExcursoesController } from './excursoes.controller';
import { ExcursoesService } from './excursoes.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ExcursoesController],
  providers: [ExcursoesService, PrismaService],
})
export class ExcursoesModule { }
