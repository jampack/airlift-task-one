import { Module } from '@nestjs/common';
import { ApproachOneModule } from './modules/approachOne/approachOne.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RedisCacheModule } from './modules/redisCache/redisCache.module';
import { ConfigModule } from '@nestjs/config';
import { ApproachTwoModule } from './modules/approachTwo/approachTwo.module';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health/health.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_DB_URI),
    ApproachOneModule,
    ApproachTwoModule,
    RedisCacheModule,
    TerminusModule,
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
