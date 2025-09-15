import {
  Controller, Get, Post, Body, Param, Delete, Query, ParseIntPipe, Put,
  UseGuards, UseInterceptors, Inject
} from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { ExcursoesService } from './excursoes.service';
import { UpdateExcursoeDto } from './dto/update-excursoe.dto';
import { CreateExcursoesDto } from './dto/create-excursoe.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('excursoes')
export class ExcursoesController {
  constructor(
    private readonly excursoesService: ExcursoesService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createExcursoeDto: CreateExcursoesDto) {
    const result = await this.excursoesService.create(createExcursoeDto);
    await this.cacheManager.clear();
    return result;
  }

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(600000)
  @Get()
  findAll(
    @Query('size', ParseIntPipe) size: number,
    @Query('page', ParseIntPipe) page: number,
    @Query('uf') uf?: string
  ) {
    return this.excursoesService.findAllWithUf(size, page, uf);
  }

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(600000)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.excursoesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateExcursoeDto: UpdateExcursoeDto) {
    const result = await this.excursoesService.update(id, updateExcursoeDto);
    await this.cacheManager.clear();
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const result = await this.excursoesService.remove(id);
    await this.cacheManager.clear();
    return result;
  }
}