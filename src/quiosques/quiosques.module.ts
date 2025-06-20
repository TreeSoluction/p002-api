import { Module } from '@nestjs/common';
import { QuiosquesService } from './quiosques.service';
import { QuiosquesController } from './quiosques.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [QuiosquesController],
  providers: [QuiosquesService, PrismaService],
})
export class QuiosquesModule {}
