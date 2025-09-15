import {
  Controller, Get, Post, Body, Param, Delete, Query, ParseIntPipe, Put,
  UseGuards, UseInterceptors, Inject
} from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { EstacionamentosService } from './estacionamentos.service';
import { CreateEstacionamentoDto } from './dto/create-estacionamento.dto';
import { UpdateEstacionamentoDto } from './dto/update-estacionamento.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('estacionamentos')
export class EstacionamentosController {
  constructor(
    private readonly estacionamentosService: EstacionamentosService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createEstacionamentoDto: CreateEstacionamentoDto) {
    const result = await this.estacionamentosService.create(createEstacionamentoDto);
    await this.cacheManager.clear();
    return result;
  }

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(600000)
  @Get()
  findAll(
    @Query('size', ParseIntPipe) size: number,
    @Query('page', ParseIntPipe) page: number,
    @Query('cidade') cidade: string
  ) {
    return this.estacionamentosService.findAll(size, page, cidade);
  }

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(600000)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.estacionamentosService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateEstacionamentoDto: UpdateEstacionamentoDto) {
    const result = await this.estacionamentosService.update(id, updateEstacionamentoDto);
    await this.cacheManager.clear();
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const result = await this.estacionamentosService.remove(id);
    await this.cacheManager.clear();
    return result;
  }
}