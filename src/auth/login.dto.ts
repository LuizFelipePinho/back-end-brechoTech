import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { User, Vendedor } from '.prisma/client';

export class LoginDto {
  @ApiProperty({
    example: 'pepe156@gmail.com',
    description: `O email sera utitizado para logar na conta.`,
  })
  @IsString()
  @Length(8, 30)
  email: string;

  @ApiProperty({
    example: '12345hj',
    description: `A senha para acessar a conta .`,
  })
  @IsString()
  @Length(8, 14)
  password: string;
}

export class AuthResponse {
  token: string;
  user: User;
  vendedor: Vendedor;
}
