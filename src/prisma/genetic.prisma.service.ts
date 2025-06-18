import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GenericPrismaService<TCreateDto, TUpdateDto> {
  constructor(
    private db: PrismaService,
    private modelName: string
  ) { }

  private get model() {
    return (this.db as any)[this.modelName];
  }

  async create(payload: TCreateDto): Promise<any> {
    return await this.model.create({ data: { ...payload } });
  }

  async findAll(): Promise<any[]> {
    return await this.model.findMany();
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