import { Controller, Get, Post, Body, Param, Delete, Query, ParseIntPipe, Put, UseGuards } from '@nestjs/common';
import { LojasService } from './lojas.service';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('lojas')
export class LojasController {
  constructor(private readonly lojasService: LojasService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createLojaDto: CreateLojaDto) {
    return this.lojasService.create(createLojaDto);
  }

  @Get()
  findAll(@Query("size", ParseIntPipe) size: number, @Query('page', ParseIntPipe) page: number, @Query('cidade') cidade: string, @Query('categoria') categoria: string) {
    return this.lojasService.findAllWithCategoryFilter(size, page, cidade, categoria);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lojasService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateLojaDto: UpdateLojaDto) {
    return this.lojasService.update(+id, updateLojaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lojasService.remove(+id);
  }
}