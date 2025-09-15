import {
  Controller, Get, Post, Body, Param, Delete, Query, Put,
  UseGuards, UseInterceptors, Inject
} from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { CidadesService } from './cidades.service';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('cidades')
export class CidadesController {
  constructor(
    private readonly cidadesService: CidadesService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createCidadeDto: CreateCidadeDto) {
    const result = await this.cidadesService.create(createCidadeDto);
    await this.cacheManager.clear();
    return result;
  }

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(60000)
  @Get()
  findAll(
    @Query('size') size?: number,
    @Query('page') page?: number,
    @Query('estado') estado?: string,
    @Query('nome') nome?: string,
  ) {
    return this.cidadesService.findAllWithAllFilters(size, page, estado, nome);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cidadesService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCidadeDto: UpdateCidadeDto) {
    const result = await this.cidadesService.update(+id, updateCidadeDto);
    await this.cacheManager.clear();
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.cidadesService.remove(+id);
    await this.cacheManager.clear();
    return result;
  }
}