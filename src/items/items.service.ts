import { Injectable } from "@nestjs/common";
// import { Item } from './interfaces/item.interface';
import { Item, ItemDocument } from './schemas/item.schema';
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class ItemsService {
    constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}

    async getAll(): Promise<Item[]> {
        return this.itemModel.find();
    }

    async getOne(id: string): Promise<Item> {
        return await this.itemModel.findOne({ _id: id }).exec();
    }

    async create(item: Item): Promise<Item> {
        const newItem = new this.itemModel(item);
        return await newItem.save();
    }

    async delete(id: string): Promise<Item> {
        return await this.itemModel.findByIdAndRemove(id);
    }

    async update(id: string, item: Item): Promise<Item> {
        return await this.itemModel.findByIdAndUpdate(id,item,{ new: true });
    }
}