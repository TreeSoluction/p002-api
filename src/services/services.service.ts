import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { GenericPrismaService } from 'src/prisma/genetic.prisma.service';

@Injectable()
export class ServicesService extends GenericPrismaService<CreateServiceDto, UpdateServiceDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'services');
  }
}