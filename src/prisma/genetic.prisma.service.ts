import { Injectable } from '@nestjs/common';
import { skip } from 'node:test';
import { take } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GenericPrismaService<TCreateDto, TUpdateDto> {
  constructor(
    protected db: PrismaService,
    protected modelName: string
  ) { }

  private get model() {
    return (this.db as any)[this.modelName];
  }

  async create(payload: TCreateDto): Promise<any> {
    return await this.model.create({ data: { ...payload } });
  }

  async findAll(size?: number, page?: number, city?: string): Promise<{ data: any[]; page: number; size: number; totalPages: number }> {
    if (size === undefined) size = 10;
    if (page === undefined) page = 1;
    const realPage = Math.max(page - 1, 0);
    const realSize = Math.max(size, 1);
    const whereCondition = city == undefined ? {} : { cidade: { equals: city } };
    const data = await this.model.findMany({ skip: realPage * realSize, take: realSize, where: whereCondition });
    const totalCount = await this.model.count();
    const totalPages = Math.max(1, Math.ceil(totalCount / size));
    return { data, page, size: realSize, totalPages: totalPages };
  }

  async findOne(id: number): Promise<any> {
    return await this.model.findUniqueOrThrow({ where: { id } });
  }

  async update(id: number, updateDto: TUpdateDto): Promise<any> {
    return await this.model.update({
      where: { id },
      data: { ...updateDto },
    });
  }

  async remove(id: number): Promise<any> {
    return await this.model.delete({ where: { id } });
  }
}