import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll(): Product[] {
    return [
      {
        id: '1',
        name: 'Product 1',
      },
      {
        id: '2',
        name: 'Product 2',
      },
    ];
  }

  findOne(id: number): Product {
    return {
      id: '1',
      name: 'Product 1',
    };
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
