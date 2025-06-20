import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { MalhariasService } from './malharias.service';
import { CreateMalhariaDto } from './dto/create-malharia.dto';
import { UpdateMalhariaDto } from './dto/update-malharia.dto';

@Controller('malharias')
export class MalhariasController {
  constructor(private readonly malhariasService: MalhariasService) { }

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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMalhariaDto: UpdateMalhariaDto) {
    return this.malhariasService.update(+id, updateMalhariaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.malhariasService.remove(+id);
  }
}
