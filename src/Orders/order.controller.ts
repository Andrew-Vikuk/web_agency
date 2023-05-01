import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { orderService } from './order.service';

@Controller('orders')
export class OrderController {
    constructor (private orderService: orderService){}

    @Get()
    getAll(){
        return this.orderService.getAllOrder();
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.orderService.getOrder(id);
    }

    @Delete(':id')
    deleteOrder(@Param('id') id: number) {
        return this.orderService.deleteOrder(id);
     }

     @Post()
    createOrder(@Body() body){
        return this.orderService.createOrder(body)
    }
}