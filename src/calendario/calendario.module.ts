import { Module } from '@nestjs/common';
import { CalendarioService } from './calendario.service';
import { CalendarioController } from './calendario.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    UserModule,
    CacheModule.register()
  ],
  providers: [
    CalendarioService,
    PrismaService,
    JwtAuthGuard,
  ],
  controllers: [CalendarioController],
})
export class CalendarioModule { }
