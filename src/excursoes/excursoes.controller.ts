import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExcursoesService } from './excursoes.service';
import { UpdateExcursoeDto } from './dto/update-excursoe.dto';
import { CreateExcursoesDto } from './dto/create-excursoe.dto';

@Controller('excursoes')
export class ExcursoesController {
  constructor(private readonly excursoesService: ExcursoesService) { }

  @Post()
  create(@Body() createExcursoeDto: CreateExcursoesDto) {
    return this.excursoesService.create(createExcursoeDto);
  }

  @Get()
  findAll() {
    return this.excursoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.excursoesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExcursoeDto: UpdateExcursoeDto) {
    return this.excursoesService.update(+id, updateExcursoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.excursoesService.remove(+id);
  }
}
