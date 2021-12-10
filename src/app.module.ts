import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  // no imports chamamos o modulo de cada componente
  imports: [ProductModule, UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
