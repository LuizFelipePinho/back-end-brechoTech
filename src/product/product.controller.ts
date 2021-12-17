import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/product.dto';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/auth/role.decorator';
import { RolesGuard } from 'src/auth/role.guard';
import { UserRole } from 'src/users/user-roles-enum';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Role(UserRole.VENDOR)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  // precisa ser vendedor tbm
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

  @UseGuards(AuthGuard('jwt'))
  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateProductDto: CreateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('delete/:id')
  remove(@Param('id') id: number) {
    return this.productService.remove(+id);
  }
}
