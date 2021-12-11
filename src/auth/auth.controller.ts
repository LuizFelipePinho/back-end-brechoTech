import { Controller, Post, Body, Req, UseGuards, Get } from '@nestjs/common';
import { User } from '.prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDto, AuthResponse } from './auth.dto';
import AuthUser from 'src/decorator/auth-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('login')
  LoginDto(@Body() data: LoginDto): Promise<AuthResponse> {
    return this.service.login(data);
  }

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  me(@AuthUser() user: User): User {
    delete user.password;
    return user;
  }
}
