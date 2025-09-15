import {
  Controller, Get, Post, Body, Param, Delete, Query, ParseIntPipe, Put,
  UseGuards, UseInterceptors, Inject
} from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { QuiosquesService } from './quiosques.service';
import { CreateQuiosqueDto } from './dto/create-quiosque.dto';
import { UpdateQuiosqueDto } from './dto/update-quiosque.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('quiosques')
export class QuiosquesController {
  constructor(
    private readonly quiosquesService: QuiosquesService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createQuiosqueDto: CreateQuiosqueDto) {
    const result = await this.quiosquesService.create(createQuiosqueDto);
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
    return this.quiosquesService.findAll(size, page, cidade);
  }

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(600000)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.quiosquesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateQuiosqueDto: UpdateQuiosqueDto) {
    const result = await this.quiosquesService.update(id, updateQuiosqueDto);
    await this.cacheManager.clear();
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const result = await this.quiosquesService.remove(id);
    await this.cacheManager.clear();
    return result;
  }
}