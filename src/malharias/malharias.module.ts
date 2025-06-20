import { Module } from '@nestjs/common';
import { MalhariasService } from './malharias.service';
import { MalhariasController } from './malharias.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [MalhariasController],
  providers: [MalhariasService, PrismaService],
})
export class MalhariasModule { }
