import { Controller, Get, Post, Body, Param, Delete, Query, ParseIntPipe, Put, UseGuards } from '@nestjs/common';
import { HospedagensService } from './hospedagens.service';
import { CreateHospedagenDto } from './dto/create-hospedagen.dto';
import { UpdateHospedagenDto } from './dto/update-hospedagen.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('hospedagens')
export class HospedagensController {
  constructor(private readonly hospedagensService: HospedagensService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createHospedagenDto: CreateHospedagenDto) {
    return this.hospedagensService.create(createHospedagenDto);
  }

  @Get()
  findAll(@Query("size", ParseIntPipe) size: number, @Query('page', ParseIntPipe) page: number, @Query('cidade') cidade: string) {

    return this.hospedagensService.findAll(size, page, cidade);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hospedagensService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateHospedagenDto: UpdateHospedagenDto) {
    return this.hospedagensService.update(+id, updateHospedagenDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hospedagensService.remove(+id);
  }
}