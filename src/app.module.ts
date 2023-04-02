import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { InventoryModule } from './inventory/inventory.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductsModule,
    OrdersModule,
    InventoryModule,
    MongooseModule.forRoot('mongodb://mongo/nest'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
