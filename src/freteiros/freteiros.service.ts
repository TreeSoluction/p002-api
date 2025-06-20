import { Injectable } from '@nestjs/common';
import { CreateFreteiroDto } from './dto/create-freteiro.dto';
import { UpdateFreteiroDto } from './dto/update-freteiro.dto';

@Injectable()
export class FreteirosService {
  create(createFreteiroDto: CreateFreteiroDto) {
    return 'This action adds a new freteiro';
  }

  findAll() {
    return `This action returns all freteiros`;
  }

  findOne(id: number) {
    return `This action returns a #${id} freteiro`;
  }

  update(id: number, updateFreteiroDto: UpdateFreteiroDto) {
    return `This action updates a #${id} freteiro`;
  }

  remove(id: number) {
    return `This action removes a #${id} freteiro`;
  }
}
