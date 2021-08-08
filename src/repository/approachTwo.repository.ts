import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { SensorData, SensorDataDocument } from '../database/sensorData.schema';
import { Model } from 'mongoose';
import { ApproachTwoRequestDto } from '../modules/approachTwo/dto/request/approachTwo.request.dto';

@Injectable()
export class ApproachTwoRepository {
  constructor(
    @InjectModel(SensorData.name)
    private sensorDataModel: Model<SensorDataDocument>,
  ) {}

  async create(approachTwoData: ApproachTwoRequestDto) {
    return this.sensorDataModel.create(approachTwoData, (err, doc) => {
      if (err) {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: 'DB Error',
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      return doc;
    });
  }
}
