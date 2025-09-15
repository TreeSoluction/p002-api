import {
  Controller, Get, Post, Body, Param, Delete, Query, ParseIntPipe, Put,
  UseGuards, UseInterceptors, Inject
} from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { MalhariasService } from './malharias.service';
import { CreateMalhariaDto } from './dto/create-malharia.dto';
import { UpdateMalhariaDto } from './dto/update-malharia.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('malharias')
export class MalhariasController {
  constructor(
    private readonly malhariasService: MalhariasService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createMalhariaDto: CreateMalhariaDto) {
    const result = await this.malhariasService.create(createMalhariaDto);
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
    return this.malhariasService.findAll(size, page, cidade);
  }

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(600000)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.malhariasService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateMalhariaDto: UpdateMalhariaDto) {
    const result = await this.malhariasService.update(id, updateMalhariaDto);
    await this.cacheManager.clear();
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const result = await this.malhariasService.remove(id);
    await this.cacheManager.clear();
    return result;
  }
}