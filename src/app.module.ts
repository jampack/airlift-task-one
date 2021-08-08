import { Module } from '@nestjs/common';
import { ApproachOneModule } from './modules/approachOne/approachOne.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RedisCacheModule } from './modules/redisCache/redisCache.module';
import { ConfigModule } from '@nestjs/config';
import { ApproachTwoModule } from './modules/approachTwo/approachTwo.module';
import { ApproachTwoController } from './modules/approachTwo/approachTwo.controller';
import { ApproachTwoService } from './modules/approachTwo/approachTwo.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_DB_URI),
    ApproachOneModule,
    ApproachTwoModule,
    RedisCacheModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
