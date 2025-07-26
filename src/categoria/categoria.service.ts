import { Injectable } from '@nestjs/common';
import { GenericPrismaService } from 'src/prisma/genetic.prisma.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoriaDto } from './dto/create-categoria-dto';

@Injectable()
export class CategoriaService extends GenericPrismaService<CreateCategoriaDto, CreateCategoriaDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'categoria');
  }

  async update(id: number, updateDto: CreateCategoriaDto): Promise<any> {
    return this.db.$transaction(async (prisma) => {
      const categoria = await prisma.categoria.findUnique({ where: { id } });

      if (!categoria) {
        throw new Error(`Category with ID ${id} not found.`);
      }

      const citiesWithCategory = await prisma.cidades.findMany({
        where: {
          categorias: {
            has: categoria.nome,
          },
        },
      });

      const storesWithCategory = await prisma.lojas.findMany({
        where: {
          categoria: { equals: categoria.nome },
        },
      });

      for (const store of storesWithCategory) {
        await prisma.lojas.update({
          where: { id: store.id },
          data: {
            categoria: updateDto.nome,
          },
        });
      }

      for (const city of citiesWithCategory) {
        const updatedCategorias = city.categorias.map(cat =>
          cat === categoria.nome ? updateDto.nome : cat
        );

        await prisma.cidades.update({
          where: { id: city.id },
          data: {
            categorias: updatedCategorias,
          },
        });
      }

      const updatedCategoria = await prisma.categoria.update({
        where: { id },
        data: { ...updateDto },
      });

      return updatedCategoria;
    });
  }
}
