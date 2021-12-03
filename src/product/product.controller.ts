import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get('/')
  findAll() {
    return this.productService.findAll();
  }

  @Get('find/:id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateProductDto: CreateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
