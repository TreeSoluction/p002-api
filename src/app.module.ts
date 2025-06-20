import { Module } from '@nestjs/common';
import { ServicesModule } from './services/services.module';
import { ExcursoesModule } from './excursoes/excursoes.module';
import { HospedagensModule } from './hospedagens/hospedagens.module';
import { RestaurantesModule } from './restaurantes/restaurantes.module';
import { QuiosquesModule } from './quiosques/quiosques.module';
import { EstacionamentosModule } from './estacionamentos/estacionamentos.module';
import { MalhariasModule } from './malharias/malharias.module';

@Module({
  imports: [ServicesModule, ExcursoesModule, HospedagensModule, RestaurantesModule, QuiosquesModule, EstacionamentosModule, MalhariasModule],
  controllers: [],
  exports: [],
  providers: [],
})
export class AppModule { }
