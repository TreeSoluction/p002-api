import { Module } from '@nestjs/common';
import { FreteirosService } from './freteiros.service';
import { FreteirosController } from './freteiros.controller';
import { UserModule } from 'src/user/user.module';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [UserModule, CacheModule.register()],
  controllers: [FreteirosController],
  providers: [FreteirosService, PrismaService, JwtAuthGuard],
})
export class FreteirosModule { }