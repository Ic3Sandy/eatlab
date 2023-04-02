import { IsNumber, IsString } from 'class-validator';

export class ImportProductDto {
  @IsString()
  name: string;

  @IsNumber()
  quantity: number;
}

export class ImportProductsDto {
  products: ImportProductDto[];

  constructor() {
    this.products = [];
  }
}
