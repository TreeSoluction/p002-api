import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GenericPrismaService } from 'src/prisma/genetic.prisma.service';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';

@Injectable()
export class CidadesService extends GenericPrismaService<CreateCidadeDto, UpdateCidadeDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'cidades');
  }

  async findOne(id: number): Promise<any> {
    const result = await this.db.cidades.findUnique({ where: { id } });
    const categorias = Array<CategoriaResponse>();
    for (const categoria of result?.categorias ?? []) {
      const categoriaSearch = await this.db.categoria.findFirstOrThrow({ where: { nome: categoria } });
      categorias.push({ nome: categoria, imagem: categoriaSearch.imagem || undefined });
    }
    const response = { id: result?.id, nome: result?.nome, estado: result?.estado, categorias: categorias, imagem: result?.imagem };
    return response;
  }

  async findAllWithAllFilters(
    size?: number,
    page?: number,
    estado?: string,
    nome?: string
  ): Promise<{ data: any[]; page: number; size: number; totalPages: number }> {
    const realPage = Math.max((page ?? 1) - 1, 0);
    const realSize = Math.max(size ?? 10, 1);

    const where: any = {};
    if (estado) where.estado = estado;
    if (nome) where.nome = { contains: nome, mode: 'insensitive' };

    const data = await this.db.cidades.findMany({
      skip: realPage * realSize,
      take: realSize,
      where,
    });

    const totalCount = await this.db.cidades.count({ where });
    const totalPages = Math.max(1, Math.ceil(totalCount / realSize));

    return { data, page: realPage + 1, size: realSize, totalPages };
  }

  async findAllByUf(size: number, page: number, estado: string): Promise<{ data: any[]; page: number; size: number; totalPages: number }> {
    const realPage = Math.max(page - 1, 0);
    const realSize = Math.max(size, 1);
    const data = await this.db.cidades.findMany({ skip: realPage * realSize, take: realSize, where: { estado: estado } });
    const totalCount = await this.db.cidades.count();
    const totalPages = Math.max(1, Math.ceil(totalCount / size));
    return { data, page, size: realSize, totalPages: totalPages };
  }
}