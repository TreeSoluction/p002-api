import { IsNotEmpty, IsString } from "class-validator";

export class CreateExcursoesDto {
  @IsString()
  @IsNotEmpty()
  nome: String;
  @IsString()
  @IsNotEmpty()
  descricao: String;
  @IsString()
  @IsNotEmpty()
  estado: String;
  @IsString()
  @IsNotEmpty()
  origem: String;
  @IsString()
  @IsNotEmpty()
  rota: String[];
  @IsString()
  @IsNotEmpty()
  phone_numbers: String[];
}
