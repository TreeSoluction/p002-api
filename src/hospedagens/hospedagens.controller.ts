import {
  Controller, Get, Post, Body, Param, Delete, Query, ParseIntPipe, Put,
  UseGuards, UseInterceptors, Inject
} from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { HospedagensService } from './hospedagens.service';
import { CreateHospedagenDto } from './dto/create-hospedagen.dto';
import { UpdateHospedagenDto } from './dto/update-hospedagen.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('hospedagens')
export class HospedagensController {
  constructor(
    private readonly hospedagensService: HospedagensService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createHospedagenDto: CreateHospedagenDto) {
    const result = await this.hospedagensService.create(createHospedagenDto);
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
    return this.hospedagensService.findAll(size, page, cidade);
  }

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(600000)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.hospedagensService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateHospedagenDto: UpdateHospedagenDto) {
    const result = await this.hospedagensService.update(id, updateHospedagenDto);
    await this.cacheManager.clear();
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const result = await this.hospedagensService.remove(id);
    await this.cacheManager.clear();
    return result;
  }
}