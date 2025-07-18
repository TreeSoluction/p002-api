import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserModule } from 'src/user/user.module';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CarroselController } from './carrosel.controller';
import { CarroselService } from './carrosel.service';

@Module({
  imports: [UserModule],
  controllers: [CarroselController],
  providers: [CarroselService, PrismaService, JwtAuthGuard],
})
export class CarrosselModule { }