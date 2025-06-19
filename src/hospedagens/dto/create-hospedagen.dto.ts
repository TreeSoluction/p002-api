import { IsNotEmpty, IsString } from "class-validator";

export class CreateHospedagenDto {
  @IsString()
  @IsNotEmpty()
  nome: String;
  @IsString()
  @IsNotEmpty()
  local: String;
  @IsString()
  imagem: String;
  @IsString()
  @IsNotEmpty()
  phone_numbers: String[];
}
