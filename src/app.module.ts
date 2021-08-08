import { Module } from '@nestjs/common';
import { ApproachOneModule } from './modules/approachOne/approachOne.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RedisCacheModule } from './modules/redisCache/redisCache.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_DB_URI),
    ApproachOneModule,
    RedisCacheModule,
  ],
  controllers: [],
})
export class AppModule {}
