/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param } from '@nestjs/common';
import { WordService } from './word.service';

@Controller('word')
export class WordController {
    constructor(private wordService:WordService) { }

    @Get('/')
    async getWords() {
        return await this.wordService.findAll();
    }

    @Get('/:id')
    async getWord(@Param('id') id:string) {
        return await this.wordService.findOne(id);
    }

    @Get('/category/:category')
    async getWordsByCategory(@Param('category') category:string) {
        return await this.wordService.findByCatergory(category);
    }

    // need update and delete
}
