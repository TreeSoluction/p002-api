// src/user/user.service.ts
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) { }

  async create(dto: CreateUserDto) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(dto.senha, salt);

    return this.prisma.usuarios.create({
      data: {
        email: dto.email,
        senha: hash,
      },
    });
  }

  async findAll() {
    return this.prisma.usuarios.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.usuarios.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`Usuário #${id} não encontrado`);
    }
    return user;
  }

  async update(id: number, dto: UpdateUserDto) {
    await this.findOne(id);

    const data: any = { ...dto };
    if (dto.senha) {
      const salt = await bcrypt.genSalt();
      data.senha = await bcrypt.hash(dto.senha, salt);
    }

    return this.prisma.usuarios.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.usuarios.delete({ where: { id } });
  }

  async login(email: string, senha: string): Promise<{ access_token: string }> {
    const user = await this.prisma.usuarios.findUnique({
      where: { email },
    });
    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const token = await this.generateToken({ id: user.id, email: user.email });
    return { access_token: token };
  }

  async generateToken(user: { id: number; email: string }) {
    const payload = { sub: user.id, email: user.email };
    return this.jwtService.signAsync(payload);
  }

  async validateToken(token: string) {
    try {
      const payload = this.jwtService.verify<{ sub: number }>(token);
      return this.findOne(payload.sub);
    } catch {
      throw new UnauthorizedException('Token inválido ou expirado');
    }
  }
}