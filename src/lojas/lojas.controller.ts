import {
  Controller, Get, Post, Body, Param, Delete, Query, Put,
  UseGuards, UseInterceptors, Inject
} from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { LojasService } from './lojas.service';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('lojas')
export class LojasController {
  constructor(
    private readonly lojasService: LojasService,
  ) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createLojaDto: CreateLojaDto) {
    const result = await this.lojasService.create(createLojaDto);
    return result;
  }

  @UseInterceptors(CacheInterceptor)
  @Get()
  findAll(
    @Query('size') size?: number,
    @Query('page') page?: number,
    @Query('cidade') cidade?: string,
    @Query('categoria') categoria?: string,
    @Query('nome') nome?: string
  ) {
    return this.lojasService.findAllWithAllFilters(size, page, cidade, categoria, nome);
  }

  @UseInterceptors(CacheInterceptor)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lojasService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateLojaDto: UpdateLojaDto) {
    const result = await this.lojasService.update(+id, updateLojaDto);
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.lojasService.remove(+id);
    return result;
  }
}