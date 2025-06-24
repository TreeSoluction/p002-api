import { Controller, Get, Post, Body, Param, Delete, Query, ParseIntPipe, Put, UseGuards } from '@nestjs/common';
import { TransportadorasService } from './transportadoras.service';
import { CreateTransportadoraDto } from './dto/create-transportadora.dto';
import { UpdateTransportadoraDto } from './dto/update-transportadora.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('transportadoras')
export class TransportadorasController {
  constructor(private readonly transportadorasService: TransportadorasService) { }

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateTransportadoraDto: UpdateTransportadoraDto) {
    return this.transportadorasService.update(+id, updateTransportadoraDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transportadorasService.remove(+id);
  }
}