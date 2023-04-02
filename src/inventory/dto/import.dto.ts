import { IsNumber, IsString } from 'class-validator';

export class ImportProductDto {
  @IsString()
  productId: string;

  @IsNumber()
  level: number;
}

export class ImportProductsDto {
  products: ImportProductDto[];

  constructor() {
    this.products = [];
  }
}
