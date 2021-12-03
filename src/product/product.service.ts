import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductService {
  constructor(private db: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    const data = createProductDto;
    const createProduct = await this.db.product.create({ data });

    return createProduct;
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
