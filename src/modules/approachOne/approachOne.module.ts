import { Module } from '@nestjs/common';
import { ApproachOneController } from './approachOne.controller';
import { ApproachOneService } from './approachOne.service';
import { SensorData, SensorDataSchema } from '../../database/sensorData.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ApproachOneRepository } from '../../repository/approachOne.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SensorData.name, schema: SensorDataSchema },
    ]),
  ],
  controllers: [ApproachOneController],
  providers: [ApproachOneService, ApproachOneRepository],
})
export class ApproachOneModule {}
