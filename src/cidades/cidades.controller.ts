import { Controller, Get, Post, Body, Param, Delete, Query, ParseIntPipe, Put, UseGuards } from '@nestjs/common';
import { CidadesService } from './cidades.service';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('cidades')
export class CidadesController {
  constructor(private readonly cidadesService: CidadesService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCidadeDto: CreateCidadeDto) {
    return this.cidadesService.create(createCidadeDto);
  }

  @Get()
  findAll(
    @Query('size') size?: number,
    @Query('page') page?: number,
    @Query('estado') estado?: string,
    @Query('nome') nome?: string
  ) {
    return this.cidadesService.findAllWithAllFilters(size, page, estado, nome);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cidadesService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCidadeDto: UpdateCidadeDto) {
    return this.cidadesService.update(+id, updateCidadeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cidadesService.remove(+id);
  }
}