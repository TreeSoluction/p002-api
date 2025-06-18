import { PartialType } from '@nestjs/mapped-types';
import { CreateExcursoesDto } from './create-excursoe.dto';

export class UpdateExcursoeDto extends PartialType(CreateExcursoesDto) { }
