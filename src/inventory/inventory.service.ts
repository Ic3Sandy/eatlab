import { Injectable } from '@nestjs/common';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { ImportProductDto } from './dto/import.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Inventory } from './schemas/inventory.schemas';
import { Product } from '../products/schemas/product.schema';

@Injectable()
export class InventoryService {
  constructor(
    @InjectModel(Inventory.name)
    private readonly inventoryModel: Model<Inventory>,
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async import(products: ImportProductDto[]) {
    for (const product of products) {
      await this.inventoryModel.create(product);
    }
  }

  async findAll(): Promise<Inventory[]> {
    return await this.inventoryModel.find().exec();
  }

  async findOne(id: string): Promise<Product> {
    return this.productModel.findOne({ _id: id }).exec();
  }

  update(id: number, updateInventoryDto: UpdateInventoryDto) {
    return `This action updates a #${id} inventory`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventory`;
  }
}
