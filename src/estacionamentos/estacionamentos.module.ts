import { Module } from '@nestjs/common';
import { EstacionamentosController } from './estacionamentos.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { EstacionamentosService } from './estacionamentos.service';
import { UserModule } from 'src/user/user.module';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  imports: [UserModule],
  controllers: [EstacionamentosController],
  providers: [EstacionamentosService, PrismaService, JwtAuthGuard],
})
export class EstacionamentosModule { }