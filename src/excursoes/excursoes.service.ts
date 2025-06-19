import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GenericPrismaService } from 'src/prisma/genetic.prisma.service';
import { CreateExcursoesDto } from './dto/create-excursoe.dto';
import { UpdateExcursoeDto } from './dto/update-excursoe.dto';

@Injectable()
export class ExcursoesService extends GenericPrismaService<CreateExcursoesDto, UpdateExcursoeDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'excursoes');
  }

  async findAllWithUf(
    size: number,
    page: number,
    uf?: string
  ): Promise<{ data: any[]; page: number; size: number; totalPages: number }> {
    const realPage = Math.max(page - 1, 0);
    const realSize = Math.max(size, 1);

    const where = uf ? { estado: uf } : {};

    const data = await this.db.excursoes.findMany({
      skip: realPage * realSize,
      take: realSize,
      where,
    });

    const totalCount = await this.db.excursoes.count({ where });

    const totalPages = Math.max(1, Math.ceil(totalCount / realSize));

    return { data, page, size: realSize, totalPages };
  }
}