import { Controller, Post, Body, Get } from '@nestjs/common';
import AuthUser from './auth-user.decorator';
import { AuthService } from './auth.service';
import { LoginDto, AuthResponse } from './login.dto';
import { User } from '@prisma/client';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('login')
  @ApiBearerAuth()
  LoginDto(@Body() data: LoginDto): Promise<AuthResponse> {
    return this.service.login(data);
  }

  @Get('me')
  @ApiBearerAuth()
  me(@AuthUser() user: User): User {
    return user;
  }
}
