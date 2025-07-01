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
  async findAllWithCategoryFilter(size: number, page: number, city: string, categoria: string): Promise<{ data: any[]; page: number; size: number; totalPages: number }> {
    const realPage = Math.max(page - 1, 0);
    const realSize = Math.max(size, 1);
    const data = await this.db.lojas.findMany({ skip: realPage * realSize, take: realSize, where: { cidade: city, categoria: categoria } });
    const totalCount = await this.db.lojas.count();
    const totalPages = Math.max(1, Math.ceil(totalCount / size));
    return { data, page, size: realSize, totalPages: totalPages };
  }
}