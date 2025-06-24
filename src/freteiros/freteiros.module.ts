import { Module } from '@nestjs/common';
import { FreteirosService } from './freteiros.service';
import { FreteirosController } from './freteiros.controller';
import { UserModule } from 'src/user/user.module';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  imports: [UserModule],
  controllers: [FreteirosController],
  providers: [FreteirosService, JwtAuthGuard],
})
export class FreteirosModule { }