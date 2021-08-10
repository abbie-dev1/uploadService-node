import { WordModule } from './word/word.module';
import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './Shared/http-error.filter';

@Module({
  imports: [
    WordModule,
    MongooseModule.forRoot('mongodb://localhost/pwd'),
    
  ],
  controllers: [AppController],
  providers: [AppService,{
  provide: APP_FILTER,
  useClass: HttpErrorFilter
  }],
})
export class AppModule { }
