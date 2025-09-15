import { Module } from '@nestjs/common';
import { HospedagensService } from './hospedagens.service';
import { HospedagensController } from './hospedagens.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserModule } from 'src/user/user.module';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [UserModule, CacheModule.register()],
  controllers: [HospedagensController],
  providers: [HospedagensService, PrismaService, JwtAuthGuard],
})
export class HospedagensModule { }