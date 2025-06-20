import { PartialType } from '@nestjs/mapped-types';
import { CreateQuiosqueDto } from './create-quiosque.dto';

export class UpdateQuiosqueDto extends PartialType(CreateQuiosqueDto) {}
