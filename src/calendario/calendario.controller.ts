import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, Put, UseGuards } from '@nestjs/common';
import { CalendarioService } from './calendario.service';
import { CreateCalendarioDto } from './dto/create-calendario.dto';
import { UpdateCalendarioDto } from './dto/update-calendario.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('calendario')
export class CalendarioController {
  constructor(private readonly calendarioService: CalendarioService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCalendarioDto: CreateCalendarioDto) {
    return this.calendarioService.create(createCalendarioDto);
  }

  @Get()
  findAll(@Query("size", ParseIntPipe) size: number, @Query('page', ParseIntPipe) page: number, @Query('cidade') cidade: string) {

    return this.calendarioService.findAll(size, page, cidade);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calendarioService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCalendarioDto: UpdateCalendarioDto) {
    return this.calendarioService.update(+id, updateCalendarioDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.calendarioService.remove(+id);
  }
}
