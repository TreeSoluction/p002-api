import {
  Controller, Get, Post, Body, Param, Delete, Query, ParseIntPipe, Put,
  UseGuards, UseInterceptors, Inject
} from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { CreateEstacionamentoDto } from './dto/create-estacionamento.dto';
import { UpdateEstacionamentoDto } from './dto/update-estacionamento.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CarroselService } from './carrosel.service';

@Controller('carrosel')
export class CarroselController {
  constructor(
    private readonly carroselService: CarroselService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createEstacionamentoDto: CreateEstacionamentoDto) {
    const result = await this.carroselService.create(createEstacionamentoDto);
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
    return this.carroselService.findAll(size, page, cidade);
  }

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(600000)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.carroselService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateEstacionamentoDto: UpdateEstacionamentoDto) {
    const result = await this.carroselService.update(id, updateEstacionamentoDto);
    await this.cacheManager.clear();
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const result = await this.carroselService.remove(id);
    await this.cacheManager.clear();
    return result;
  }
}