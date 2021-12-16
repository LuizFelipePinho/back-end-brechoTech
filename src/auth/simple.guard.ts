import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { Observable } from 'rxjs';

@Injectable()
export class SimpleGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req: Request = context.switchToHttp().getRequest();

    const token = req.headers['autorizacao'];

    if (!token) {
      throw new UnauthorizedException(' token nao encontrado');

      if (token == 'MEU_TOKEN') {
        throw new UnauthorizedException('token invalido');
      }
    }
    return true;
  }
}
