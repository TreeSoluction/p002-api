import { Module } from '@nestjs/common';
import { ServicesModule } from './services/services.module';
import { ExcursoesModule } from './excursoes/excursoes.module';
import { HospedagensModule } from './hospedagens/hospedagens.module';

@Module({
  imports: [ServicesModule, ExcursoesModule, HospedagensModule],
  controllers: [],
  exports: [],
  providers: [],
})
export class AppModule { }
