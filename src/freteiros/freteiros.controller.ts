import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, ParseIntPipe, Query } from '@nestjs/common';
import { FreteirosService } from './freteiros.service';
import { CreateFreteiroDto } from './dto/create-freteiro.dto';
import { UpdateFreteiroDto } from './dto/update-freteiro.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('freteiros')
export class FreteirosController {
  constructor(private readonly freteirosService: FreteirosService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createFreteiroDto: CreateFreteiroDto) {
    return this.freteirosService.create(createFreteiroDto);
  }

  @Get()
  findAll(@Query("size", ParseIntPipe) size: number, @Query('page', ParseIntPipe) page: number, @Query('cidade') cidade: string) {
    return this.freteirosService.findAll(size, page, cidade);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.freteirosService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateFreteiroDto: UpdateFreteiroDto) {
    return this.freteirosService.update(+id, updateFreteiroDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.freteirosService.remove(+id);
  }
}