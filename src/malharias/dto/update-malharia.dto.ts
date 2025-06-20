import { PartialType } from '@nestjs/mapped-types';
import { CreateMalhariaDto } from './create-malharia.dto';

export class UpdateMalhariaDto extends PartialType(CreateMalhariaDto) {}
