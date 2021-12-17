import { Controller, Post, Body, Get } from '@nestjs/common';
import AuthUser from 'src/decorator/auth-user.decorator';
import { AuthService } from './auth.service';
import { LoginDto, AuthResponse } from './login.dto';
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('login')
  LoginDto(@Body() data: LoginDto): Promise<AuthResponse> {
    return this.service.login(data);
  }

  @Get('me')
  me(@AuthUser() user: User): User {
    return user;
  }
}
