import { PartialType } from '@nestjs/mapped-types';
import { CreateHospedagenDto } from './create-hospedagen.dto';

export class UpdateHospedagenDto extends PartialType(CreateHospedagenDto) {}
