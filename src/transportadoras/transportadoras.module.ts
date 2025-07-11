import { Module } from '@nestjs/common';
import { TransportadorasService } from './transportadoras.service';
import { TransportadorasController } from './transportadoras.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserModule } from 'src/user/user.module';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  imports: [UserModule],
  controllers: [TransportadorasController],
  providers: [TransportadorasService, PrismaService, JwtAuthGuard],
})
export class TransportadorasModule { }