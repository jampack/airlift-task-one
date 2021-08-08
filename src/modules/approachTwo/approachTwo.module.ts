import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SensorData, SensorDataSchema } from '../../database/sensorData.schema';

import { ApproachTwoController } from './approachTwo.controller';
import { ApproachTwoService } from './approachTwo.service';
import { ApproachTwoRepository } from '../../repository/approachTwo.repository';
import { RedisCacheModule } from '../redisCache/redisCache.module';

@Module({
  imports: [
    RedisCacheModule,
    MongooseModule.forFeature([
      { name: SensorData.name, schema: SensorDataSchema },
    ]),
  ],
  controllers: [ApproachTwoController],
  providers: [ApproachTwoService, ApproachTwoRepository],
})
export class ApproachTwoModule {}
