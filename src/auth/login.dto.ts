import { IsString, Length } from 'class-validator';
import { User } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';

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
}
