import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET || 'abcdefghijklmnopqrstuvwxyz',
    signOptions: { expiresIn: '1h' },
  }),],
  controllers: [UserController],
  exports: [UserService],
  providers: [UserService, PrismaService],
})
export class UserModule { }
