import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  typeHard: string;

  @ApiProperty()
  @IsString()
  modelHard: string;

  @ApiProperty()
  @IsString()
  priceHard: string;

  @ApiProperty()
  @IsNumber()
  yearuseHard: number;

  @ApiProperty()
  @IsString()
  productPhotosHard: string;

  @ApiProperty()
  @IsString()
  videoHard: string;

  @ApiProperty()
  @IsString()
  usedHard: string;
}
