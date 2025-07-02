import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GenericPrismaService } from 'src/prisma/genetic.prisma.service';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';

@Injectable()
export class LojasService extends GenericPrismaService<CreateLojaDto, UpdateLojaDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'lojas');
  }

  async findAllWithAllFilters(
    size?: number,
    page?: number,
    nome?: string
  ): Promise<{ data: any[]; page: number; size: number; totalPages: number }> {
    const realPage = Math.max((page ?? 1) - 1, 0);
    const realSize = Math.max(size ?? 10, 1);

    const where: any = {};
    if (nome) where.nome = { contains: nome, mode: 'insensitive' };

    const data = await this.db.lojas.findMany({
      skip: realPage * realSize,
      take: realSize,
      where,
    });

    const totalCount = await this.db.lojas.count({ where });
    const totalPages = Math.max(1, Math.ceil(totalCount / realSize));

    return { data, page: realPage + 1, size: realSize, totalPages };
  }

  async findAllWithCategoryFilter(size: number, page: number, city: string, categoria: string): Promise<{ data: any[]; page: number; size: number; totalPages: number }> {
    const realPage = Math.max(page - 1, 0);
    const realSize = Math.max(size, 1);
    const data = await this.db.lojas.findMany({ skip: realPage * realSize, take: realSize, where: { cidade: city, categoria: categoria } });
    const totalCount = await this.db.lojas.count();
    const totalPages = Math.max(1, Math.ceil(totalCount / size));
    return { data, page, size: realSize, totalPages: totalPages };
  }
}