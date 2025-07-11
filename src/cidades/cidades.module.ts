import { Module } from '@nestjs/common';
import { CidadesService } from './cidades.service';
import { CidadesController } from './cidades.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserModule } from 'src/user/user.module';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [UserModule, CacheModule.register(),],
  controllers: [CidadesController],
  providers: [CidadesService, PrismaService, JwtAuthGuard],
})
export class CidadesModule { }