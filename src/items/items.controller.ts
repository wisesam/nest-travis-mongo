import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';
import { ItemsService } from "./items.service";
import { Item } from './interfaces/item.interface';


@Controller('items')
export class ItemsController {
    
    // add it as an injectable, so we can use the funcs in the service
    constructor(private readonly itemsService: ItemsService) {} 
    
    @Get() 
    async getAll():Promise<Item[]> {
       return this.itemsService.getAll();
    }
    
    @Get('/:id')
    async getOne(@Param('id') id:string):Promise<Item> {
        return this.itemsService.getOne(id);
    }

    @Post('')
    create(@Body() createItemDto: CreateItemDto): string {
        return `Created. Name: ${createItemDto.name}, Desc: ${createItemDto.description}, Qty: ${createItemDto.qty}`
    }
 
    @Put('/:id')
    update(@Param('id') id:string, @Body()  updateItemDto: CreateItemDto): string {
        return `Updating ${id}... Name: ${updateItemDto.name}, Desc: ${updateItemDto.description}, Qty: ${updateItemDto.qty}`
    }

    @Delete('/:id')
    delete(@Param('id') id:string):string {
        return `${id} got deleted`
    }
}  