import { Module } from '@nestjs/common';
import { HospedagensService } from './hospedagens.service';
import { HospedagensController } from './hospedagens.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [HospedagensController],
  providers: [HospedagensService, PrismaService],
})
export class HospedagensModule { }
