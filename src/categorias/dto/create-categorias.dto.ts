import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriasDto {
  @ApiProperty({
    example: 'Teclado',
    description: `utilizado para  cadastrar  hardwer de entrada.`,
  })
  hardwerEntrada?: string;

  @ApiProperty({
    example: 'monitor',
    description: `cadastrar  hardwer de saida .`,
  })
  hardwerSaida?: string;

  @ApiProperty({
    example: 'Processador',
    description: `utilizado para  cadastrar  hardwer de processamento.`,
  })
  hardwerProcessamento?: string;

  @ApiProperty({
    example: 'Memoria',
    description: `utilizado para  cadastrar  hardwer de Armazenamento.`,
  })
  hardwerArmazenamento?: string;
}
