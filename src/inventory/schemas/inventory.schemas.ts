import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type InventoryDocument = HydratedDocument<Inventory>;

@Schema()
export class Inventory {
  @Prop()
  productId: string;

  @Prop()
  level: number;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
