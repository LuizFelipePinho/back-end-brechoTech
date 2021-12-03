import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';
import { Prisma, Product } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductService {
  constructor(private db: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll(): Promise<Product[]> {
    const products = await this.db.product.findMany();

    return products;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: CreateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
