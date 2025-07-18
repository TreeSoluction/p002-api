import { Controller, Get, Post, Body, Param, Delete, Query, ParseIntPipe, Put, UseGuards } from '@nestjs/common';
import { QuiosquesService } from './quiosques.service';
import { CreateQuiosqueDto } from './dto/create-quiosque.dto';
import { UpdateQuiosqueDto } from './dto/update-quiosque.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('quiosques')
export class QuiosquesController {
  constructor(private readonly quiosquesService: QuiosquesService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createQuiosqueDto: CreateQuiosqueDto) {
    return this.quiosquesService.create(createQuiosqueDto);
  }

  @Get()
  findAll(@Query("size", ParseIntPipe) size: number, @Query('page', ParseIntPipe) page: number, @Query('cidade') cidade: string) {

    return this.quiosquesService.findAll(size, page, cidade);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quiosquesService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateQuiosqueDto: UpdateQuiosqueDto) {
    return this.quiosquesService.update(+id, updateQuiosqueDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quiosquesService.remove(+id);
  }
}