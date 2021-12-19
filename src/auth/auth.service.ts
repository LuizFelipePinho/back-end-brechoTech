import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { AuthResponse, LoginDto } from './login.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private db: PrismaService, private jwt: JwtService) {}

  async login(data: LoginDto) {
    const { email, password } = data;

    const user = await this.db.user.findUnique({
      where: { email },
    });

    if (user) {
      const passawordValid = await bcrypt.compare(password, user.password);

      if (!passawordValid) {
        throw new UnauthorizedException('Credenciais invalidas');
      }

      delete user.password;

      return {
        token: this.jwt.sign({ email }),
        user,
      };
    }
    // if (!user) {
    //   throw new UnauthorizedException('Credenciais invalidas');
    // }

    const vendedor = await this.db.vendedor.findUnique({
      where: { email },
    });

    if (vendedor) {
      const passawordValid = await bcrypt.compare(password, vendedor.password);

      if (!passawordValid) {
        throw new UnauthorizedException('Credenciais invalidas');
      }

      delete vendedor.password;

      return {
        token: this.jwt.sign({ email }),
        vendedor,
      };
    }
  }
}
