import {
  Controller, Get, Post, Body, Param, Delete, Put, Query, ParseIntPipe,
  UseGuards, UseInterceptors, Inject
} from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { FreteirosService } from './freteiros.service';
import { CreateFreteiroDto } from './dto/create-freteiro.dto';
import { UpdateFreteiroDto } from './dto/update-freteiro.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('freteiros')
export class FreteirosController {
  constructor(
    private readonly freteirosService: FreteirosService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createFreteiroDto: CreateFreteiroDto) {
    const result = await this.freteirosService.create(createFreteiroDto);
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
    return this.freteirosService.findAll(size, page, cidade);
  }

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(600000)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.freteirosService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateFreteiroDto: UpdateFreteiroDto) {
    const result = await this.freteirosService.update(id, updateFreteiroDto);
    await this.cacheManager.clear();
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const result = await this.freteirosService.remove(id);
    await this.cacheManager.clear();
    return result;
  }
}