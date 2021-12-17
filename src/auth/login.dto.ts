import { IsString, Length } from 'class-validator';
import { User } from '.prisma/client';

export class LoginDto {
  @IsString()
  @Length(8, 30)
  email: string;

  @IsString()
  @Length(8, 14)
  password: string;
}

export class AuthResponse {
  token: string;
  user: User;
}
