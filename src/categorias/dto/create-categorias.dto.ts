import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriasDto {
  @ApiProperty({
    example: 'Teclado',
    description: `utilizado para  cadastrar  hardwer de entrada.`,
  })
  hardwerEntrada?: boolean;

  @ApiProperty({
    example: 'monitor',
    description: `cadastrar  hardwer de saida .`,
  })
  hardwerSaida?: boolean;

  @ApiProperty({
    example: 'Processador',
    description: `utilizado para  cadastrar  hardwer de processamento.`,
  })
  hardwerProcessamento?: boolean;

  @ApiProperty({
    example: 'Memoria',
    description: `utilizado para  cadastrar  hardwer de Armazenamento.`,
  })
  hardwerArmazenamento?: boolean;
}
