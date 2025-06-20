import { Module } from '@nestjs/common';
import { TransportadorasService } from './transportadoras.service';
import { TransportadorasController } from './transportadoras.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TransportadorasController],
  providers: [TransportadorasService, PrismaService],
})
export class TransportadorasModule { }
