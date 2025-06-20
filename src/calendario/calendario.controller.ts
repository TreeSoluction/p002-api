import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, Put } from '@nestjs/common';
import { CalendarioService } from './calendario.service';
import { CreateCalendarioDto } from './dto/create-calendario.dto';
import { UpdateCalendarioDto } from './dto/update-calendario.dto';

@Controller('calendario')
export class CalendarioController {
  constructor(private readonly calendarioService: CalendarioService) { }

  @Post()
  create(@Body() createCalendarioDto: CreateCalendarioDto) {
    return this.calendarioService.create(createCalendarioDto);
  }

  @Get()
  findAll(@Query("size", ParseIntPipe) size: number, @Query('page', ParseIntPipe) page: number) {
    return this.calendarioService.findAll(size, page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calendarioService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCalendarioDto: UpdateCalendarioDto) {
    return this.calendarioService.update(+id, updateCalendarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.calendarioService.remove(+id);
  }
}
