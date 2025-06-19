import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, Put } from '@nestjs/common';
import { HospedagensService } from './hospedagens.service';
import { CreateHospedagenDto } from './dto/create-hospedagen.dto';
import { UpdateHospedagenDto } from './dto/update-hospedagen.dto';

@Controller('hospedagens')
export class HospedagensController {
  constructor(private readonly hospedagensService: HospedagensService) { }

  @Post()
  create(@Body() createHospedagenDto: CreateHospedagenDto) {
    return this.hospedagensService.create(createHospedagenDto);
  }

  @Get()
  findAll(@Query("size", ParseIntPipe) size: number, @Query('page', ParseIntPipe) page: number) {
    return this.hospedagensService.findAll(size, page);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hospedagensService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateHospedagenDto: UpdateHospedagenDto) {
    return this.hospedagensService.update(+id, updateHospedagenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hospedagensService.remove(+id);
  }
}
