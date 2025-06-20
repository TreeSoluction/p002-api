import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { FreteirosService } from './freteiros.service';
import { CreateFreteiroDto } from './dto/create-freteiro.dto';
import { UpdateFreteiroDto } from './dto/update-freteiro.dto';

@Controller('freteiros')
export class FreteirosController {
  constructor(private readonly freteirosService: FreteirosService) {}

  @Post()
  create(@Body() createFreteiroDto: CreateFreteiroDto) {
    return this.freteirosService.create(createFreteiroDto);
  }

  @Get()
  findAll() {
    return this.freteirosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.freteirosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFreteiroDto: UpdateFreteiroDto) {
    return this.freteirosService.update(+id, updateFreteiroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.freteirosService.remove(+id);
  }
}
