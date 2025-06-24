import { Controller, Get, Post, Body, Param, Delete, Query, ParseIntPipe, Put, UseGuards } from '@nestjs/common';
import { EstacionamentosService } from './estacionamentos.service';
import { CreateEstacionamentoDto } from './dto/create-estacionamento.dto';
import { UpdateEstacionamentoDto } from './dto/update-estacionamento.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('estacionamentos')
export class EstacionamentosController {
  constructor(private readonly estacionamentosService: EstacionamentosService) { }

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateEstacionamentoDto: UpdateEstacionamentoDto) {
    return this.estacionamentosService.update(+id, updateEstacionamentoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estacionamentosService.remove(+id);
  }
}