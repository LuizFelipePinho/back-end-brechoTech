import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'Teclado',
    description: `nome do produto.`,
  })
  @IsString()
  typeHard: string;

  @ApiProperty({
    example: 'Game',
    description: `modelo do produto.`,
  })
  @IsString()
  modelHard: string;

  @ApiProperty({
    example: '$ 89.99',
    description: `Preço do produto.`,
  })
  @IsString()
  priceHard: string;

  @ApiProperty({
    example: '1 ano',
    description: `tempo de uso.`,
  })
  @IsNumber()
  yearuseHard: number;

  @ApiProperty({
    example: 'imagem do ',
    description: `utilizado para  cadastrar  hardwer de entrada.`,
  })
  @IsString()
  productPhotosHard: string;

  @ApiProperty({
    example: 'video',
    description: `deve colocar o link do video`,
  })
  @IsString()
  videoHard: string;

  @ApiProperty({
    example: 'usado',
    description: `informa se o  produto ja  foi usado`,
  })
  @IsString()
  usedHard: string;

  @ApiProperty({
    example:
      'O produto não funciona muito bem acima de 50 graus então adicione um cooler potente',
    description: `Informe características do produto`,
  })
  @IsString()
  description;
}
