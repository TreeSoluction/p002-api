import { Module } from '@nestjs/common';
import { QuiosquesService } from './quiosques.service';
import { QuiosquesController } from './quiosques.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserModule } from 'src/user/user.module';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [UserModule, CacheModule.register()],
  controllers: [QuiosquesController],
  providers: [QuiosquesService, PrismaService, JwtAuthGuard],
})
export class QuiosquesModule { }