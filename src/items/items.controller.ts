import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';
import { ItemsService } from "./items.service";
import { Item } from './interfaces/item.interface';


@Controller('items')
export class ItemsController {
    
    // add it as an injectable, so we can use the funcs in the service
    constructor(private readonly itemsService: ItemsService) {} 
    
    @Get() 
    getAll():Promise<Item[]> {
       return this.itemsService.getAll();
    }
    
    @Get('/:id')
     getOne(@Param('id') id:string):Promise<Item> {
        return this.itemsService.getOne(id);
    }

    @Post('')
    create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.create(createItemDto);
    }
 
    @Put('/:id')
    update(@Param('id') id:string, @Body()  updateItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.update(id, updateItemDto);
    }

    @Delete('/:id')
    delete(@Param('id') id:string):Promise<Item> {
        return this.itemsService.delete(id);
    }
}  