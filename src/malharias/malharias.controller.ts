import { Controller, Get, Post, Body, Param, Delete, Query, ParseIntPipe, Put, UseGuards } from '@nestjs/common';
import { MalhariasService } from './malharias.service';
import { CreateMalhariaDto } from './dto/create-malharia.dto';
import { UpdateMalhariaDto } from './dto/update-malharia.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('malharias')
export class MalhariasController {
  constructor(private readonly malhariasService: MalhariasService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createMalhariaDto: CreateMalhariaDto) {
    return this.malhariasService.create(createMalhariaDto);
  }

  @Get()
  findAll(@Query("size", ParseIntPipe) size: number, @Query('page', ParseIntPipe) page: number) {
    return this.malhariasService.findAll(size, page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.malhariasService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateMalhariaDto: UpdateMalhariaDto) {
    return this.malhariasService.update(+id, updateMalhariaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.malhariasService.remove(+id);
  }
}