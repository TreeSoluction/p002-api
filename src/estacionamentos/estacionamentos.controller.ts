import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { EstacionamentosService } from './estacionamentos.service';
import { CreateEstacionamentoDto } from './dto/create-estacionamento.dto';
import { UpdateEstacionamentoDto } from './dto/update-estacionamento.dto';

@Controller('estacionamentos')
export class EstacionamentosController {
  constructor(private readonly estacionamentosService: EstacionamentosService) { }

  @Post()
  create(@Body() createEstacionamentoDto: CreateEstacionamentoDto) {
    return this.estacionamentosService.create(createEstacionamentoDto);
  }

  @Get()
  findAll(@Query("size", ParseIntPipe) size: number, @Query('page', ParseIntPipe) page: number) {
    return this.estacionamentosService.findAll(size, page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estacionamentosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstacionamentoDto: UpdateEstacionamentoDto) {
    return this.estacionamentosService.update(+id, updateEstacionamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estacionamentosService.remove(+id);
  }
}
