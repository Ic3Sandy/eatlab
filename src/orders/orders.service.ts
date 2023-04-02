import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  create(createOrderDto: CreateOrderDto): Order {
    return {
      id: '1',
      ...createOrderDto,
    };
  }

  findAll(): Order[] {
    return [
      {
        id: '1',
        quantity: 12,
        productId: '1',
      },
    ];
  }

  findOne(id: string): Order {
    return {
      id,
      quantity: 12,
      productId: '1',
    };
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
