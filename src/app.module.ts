import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ItemsController } from './items/items.controller'; // don't need cuz items.module
// import { ItemsService } from "./items/items.service"; // don't need cuz items.module
import { ItemsModule } from './items/items.module'; // don't need cuz items.module
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI),ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
