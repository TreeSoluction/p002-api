import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { QuiosquesService } from './quiosques.service';
import { CreateQuiosqueDto } from './dto/create-quiosque.dto';
import { UpdateQuiosqueDto } from './dto/update-quiosque.dto';

@Controller('quiosques')
export class QuiosquesController {
  constructor(private readonly quiosquesService: QuiosquesService) { }

  @Post()
  create(@Body() createQuiosqueDto: CreateQuiosqueDto) {
    return this.quiosquesService.create(createQuiosqueDto);
  }

  @Get()
  findAll(@Query("size", ParseIntPipe) size: number, @Query('page', ParseIntPipe) page: number) {
    return this.quiosquesService.findAll(size, page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quiosquesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuiosqueDto: UpdateQuiosqueDto) {
    return this.quiosquesService.update(+id, updateQuiosqueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quiosquesService.remove(+id);
  }
}
