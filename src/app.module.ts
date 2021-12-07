import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { CategoriasModule } from './categorias/categorias.module';
import { VendedorModule } from './vendedor/vendedor.module';
@Module({
  // no imports chamamos o modulo de cada componente
  imports: [ProductModule, CategoriasModule, VendedorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
