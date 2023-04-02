import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /*
  GET /products
  Retrieve a list of all products
  */
  @Get('products')
  getProducts(): string[] {
    return ['product1', 'product2', 'product3'];
  }
}
