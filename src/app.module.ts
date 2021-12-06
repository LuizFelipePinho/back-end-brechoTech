import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';

@Module({
  // no imports chamamos o modulo de cada componente
  imports: [ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
