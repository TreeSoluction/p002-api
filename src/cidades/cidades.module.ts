import { Module } from '@nestjs/common';
import { CidadesService } from './cidades.service';
import { CidadesController } from './cidades.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CidadesController],
  providers: [CidadesService, PrismaService],
})
export class CidadesModule { }
