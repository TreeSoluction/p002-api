import { Module } from '@nestjs/common';
import { EstacionamentosController } from './estacionamentos.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { EstacionamentosService } from './estacionamentos.service';

@Module({
  controllers: [EstacionamentosController],
  providers: [EstacionamentosService, PrismaService],
})
export class EstacionamentosModule { }
