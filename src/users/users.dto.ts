import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Maria',
    description: `informe o nome do usuario`,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Maria123@gmail.com',
    description: `informe o email do usuario`,
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'ls12345',
    description: `informe senha do usuario`,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'ls12345',
    description: `confirme a senha do usuario novamente `,
  })
  @IsString()
  @IsNotEmpty()
  passwordConfirmation: string;

  @ApiProperty({
    example: '123456789',
    description: `informe o cpf do usuario`,
  })
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @ApiProperty({
    example: 'Belo Horizonte',
    description: `informe a regiao usuario`,
  })
  @IsString()
  @IsNotEmpty()
  region: string;
}
