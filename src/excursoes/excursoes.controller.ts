import { Controller, Get, Post, Body, Param, Delete, Put, Query, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ExcursoesService } from './excursoes.service';
import { UpdateExcursoeDto } from './dto/update-excursoe.dto';
import { CreateExcursoesDto } from './dto/create-excursoe.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('excursoes')
export class ExcursoesController {
  constructor(private readonly excursoesService: ExcursoesService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createExcursoeDto: CreateExcursoesDto) {
    return this.excursoesService.create(createExcursoeDto);
  }

  @Get()
  findAll(@Query("size", ParseIntPipe) size: number, @Query('page', ParseIntPipe) page: number, @Query('uf') uf?: string) {
    return this.excursoesService.findAllWithUf(size, page, uf);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.excursoesService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateExcursoeDto: UpdateExcursoeDto) {
    return this.excursoesService.update(+id, updateExcursoeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.excursoesService.remove(+id);
  }
}