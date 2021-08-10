/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WordDocument } from './WordModels/word.document';

@Injectable()
export class WordService {
    constructor(@InjectModel('word') private wordModel:Model<WordDocument>) { }

    async findAll():Promise<WordDocument[]> {
        return await this.wordModel.find();
    }

    async findOne(id:string):Promise<WordDocument> {
        return await this.wordModel.findOne({ _id: id });
    }

    async findOneAndUpdate(id:string, data:WordDocument):Promise<WordDocument> {
        return await this.wordModel.findOneAndUpdate({ _id: id },data,{new:true});
    }

    async findOneAndRemove(id:string):Promise<WordDocument> {
        return await this.wordModel.findOneAndRemove({ _id: id });
    }

    async findByCatergory(category:string):Promise<WordDocument[]> {
        return await this.wordModel.find({ category: category });
    }

    async findAndRemove(id:string):Promise<WordDocument> {  
        return await this.wordModel.findOneAndRemove({ _id: id });
    }

    

}
