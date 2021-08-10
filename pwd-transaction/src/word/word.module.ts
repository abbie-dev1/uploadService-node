import { WordService } from './word.service';
import { WordController } from './word.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WordSchema } from './WordModels/word.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'word', schema:WordSchema}])
    ],
    controllers: [
        WordController,],
    providers: [
        WordService,],
})
export class WordModule { }
