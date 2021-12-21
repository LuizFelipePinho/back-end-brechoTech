import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductService {
  constructor(private db: PrismaService) {}

  async create(createProductDto: CreateProductDto, vendorId: string) {
    const data = createProductDto;
    const createProduct = await this.db.product.create({ data });

    await this.db.vendedor.update({
      where: { id: vendorId },
      data: {
        products: {
          connect: {
            id: createProduct.id,
          },
        },
      },
    });

    return createProduct;
  }

  async findAll(): Promise<Product[]> {
    const products = await this.db.product.findMany();

    return products;
  }

  async findOne(id: number) {
    const product = await this.db.product.findUnique({
      where: { id: id },
    });

    if (!product) {
      throw new NotFoundException('Id not found');
    }

    return product;
  }

  async update(
    id: number,
    updateProductDto: CreateProductDto,
  ): Promise<Product> {
    const productExist = await this.db.product.findUnique({
      where: { id: id },
    });

    if (productExist) {
      const atData = await this.db.product.update({
        where: { id },
        data: { ...updateProductDto },
      });
      return atData;
    } else {
      throw new NotFoundException('Id not found');
    }
  }

  async remove(id: number): Promise<Product> {
    const productOne = await this.db.product.delete({
      where: { id: id },
    });

    if (!productOne) {
      throw new NotFoundException('Id not found');
    } else {
      return productOne;
    }
  }
}
