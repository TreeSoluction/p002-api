import { Module } from '@nestjs/common';
import { ExcursoesController } from './excursoes.controller';
import { ExcursoesService } from './excursoes.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserModule } from 'src/user/user.module';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  imports: [UserModule],
  controllers: [ExcursoesController],
  providers: [ExcursoesService, PrismaService, JwtAuthGuard],
})
export class ExcursoesModule { }