import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { OrderItemsService } from './order_items.service';
import { OrderItem } from './order-item.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('order_items')
@Controller('order_items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Get()
  findAll() {
    return this.orderItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderItemsService.findOne(+id);
  }

  @Post()
  create(@Body() data: Partial<OrderItem>) {
    return this.orderItemsService.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderItemsService.remove(+id);
  }
}