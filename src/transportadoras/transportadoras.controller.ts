import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, Put } from '@nestjs/common';
import { TransportadorasService } from './transportadoras.service';
import { CreateTransportadoraDto } from './dto/create-transportadora.dto';
import { UpdateTransportadoraDto } from './dto/update-transportadora.dto';

@Controller('transportadoras')
export class TransportadorasController {
  constructor(private readonly transportadorasService: TransportadorasService) { }

  @Post()
  create(@Body() createTransportadoraDto: CreateTransportadoraDto) {
    return this.transportadorasService.create(createTransportadoraDto);
  }

  @Get()
  findAll(@Query("size", ParseIntPipe) size: number, @Query('page', ParseIntPipe) page: number) {
    return this.transportadorasService.findAll(size, page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transportadorasService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTransportadoraDto: UpdateTransportadoraDto) {
    return this.transportadorasService.update(+id, updateTransportadoraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transportadorasService.remove(+id);
  }
}
