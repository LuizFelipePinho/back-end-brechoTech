import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsString()
  typeHard: string;

  @IsString()
  modelHard: string;

  @IsString()
  priceHard: string;

  @IsNumber()
  yearuseHard: number;

  @IsString()
  productPhotosHard: string;

  @IsString()
  videoHard: string;

  @IsString()
  usedHard: string;
}
