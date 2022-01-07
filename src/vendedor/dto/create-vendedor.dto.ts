import { ApiProperty } from '@nestjs/swagger';

export class CreateVendedorDto {
  @ApiProperty({
    example: 'Maria',
    description: `informa o nome do vendedor`,
  })
  name: string;

  @ApiProperty({
    example: 'maria_luiza@gmail.com',
    description: `informa o email do vendedor`,
  })
  email: string;

  @ApiProperty({
    example: '123456ml',
    description: `informa senha `,
  })
  password: string;

  @ApiProperty({
    example: '123456ml',
    description: `confimar a senha `,
  })
  passwordConfirmation: string;

  @ApiProperty({
    example: '123456789',
    description: `informar cpf do vendedor`,
  })
  cpf: string;

  @ApiProperty({
    example: 'Rio de janeiro',
    description: `informar regiao`,
  })
  region: string;
}
