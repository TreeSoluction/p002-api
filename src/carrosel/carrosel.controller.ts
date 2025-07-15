import { Controller, Get, Post, Body, Param, Delete, Query, ParseIntPipe, Put, UseGuards } from '@nestjs/common';
import { CreateEstacionamentoDto } from './dto/create-estacionamento.dto';
import { UpdateEstacionamentoDto } from './dto/update-estacionamento.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CarroselService } from './carrosel.service';

@Controller('carrosel')
export class CarroselController {
  constructor(private readonly carroselService: CarroselService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createEstacionamentoDto: CreateEstacionamentoDto) {
    return this.carroselService.create(createEstacionamentoDto);
  }

  @Get()
  findAll(@Query("size", ParseIntPipe) size: number, @Query('page', ParseIntPipe) page: number, @Query('cidade') cidade: string) {
    return this.carroselService.findAll(size, page, cidade);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carroselService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateEstacionamentoDto: UpdateEstacionamentoDto) {
    return this.carroselService.update(+id, updateEstacionamentoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carroselService.remove(+id);
  }
}