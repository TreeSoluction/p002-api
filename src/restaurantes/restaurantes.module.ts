import { Module } from '@nestjs/common';
import { RestaurantesService } from './restaurantes.service';
import { RestaurantesController } from './restaurantes.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserModule } from 'src/user/user.module';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  imports: [UserModule],
  controllers: [RestaurantesController],
  providers: [RestaurantesService, PrismaService, JwtAuthGuard],
})
export class RestaurantesModule { }