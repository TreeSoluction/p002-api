import { Module } from '@nestjs/common';
import { MalhariasService } from './malharias.service';
import { MalhariasController } from './malharias.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserModule } from 'src/user/user.module';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  imports: [UserModule],
  controllers: [MalhariasController],
  providers: [MalhariasService, PrismaService, JwtAuthGuard],
})
export class MalhariasModule { }