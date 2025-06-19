import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GenericPrismaService } from 'src/prisma/genetic.prisma.service';
import { CreateHospedagenDto } from './dto/create-hospedagen.dto';
import { UpdateHospedagenDto } from './dto/update-hospedagen.dto';

@Injectable()
export class HospedagensService extends GenericPrismaService<CreateHospedagenDto, UpdateHospedagenDto> {
  constructor(prisma: PrismaService) {
    super(prisma, 'hospedagens');
  }
}