import { Module } from '@nestjs/common';
import { ServicesModule } from './services/services.module';
import { PrismaService } from './prisma/prisma.service';
import { ServicesController } from './services/services.controller';
import { ExcursoesModule } from './excursoes/excursoes.module';

@Module({
  imports: [ServicesModule, ExcursoesModule],
  controllers: [],
  exports: [],
  providers: [],
})
export class AppModule { }
