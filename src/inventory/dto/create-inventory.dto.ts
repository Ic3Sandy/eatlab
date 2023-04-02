import { IsNumber, IsString } from 'class-validator';

export class CreateInventoryDto {
  @IsString()
  productId: string;

  @IsNumber()
  level: number;
}
