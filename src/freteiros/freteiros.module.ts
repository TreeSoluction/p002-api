import { Module } from '@nestjs/common';
import { FreteirosService } from './freteiros.service';
import { FreteirosController } from './freteiros.controller';

@Module({
  controllers: [FreteirosController],
  providers: [FreteirosService],
})
export class FreteirosModule {}
