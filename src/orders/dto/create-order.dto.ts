import { IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  readonly quantity: number;

  @IsString()
  readonly productId: string;
}
