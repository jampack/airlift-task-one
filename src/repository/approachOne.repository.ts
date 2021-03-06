import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { SensorData, SensorDataDocument } from '../database/sensorData.schema';
import { Model } from 'mongoose';
import { ApproachOneRequestDto } from '../modules/approachOne/dto/request/approachOne.request.dto';

@Injectable()
export class ApproachOneRepository {
  constructor(
    @InjectModel(SensorData.name)
    private sensorDataModel: Model<SensorDataDocument>,
  ) {}

  async updateOrCreate(approachOneData: ApproachOneRequestDto) {
    const query = { id: approachOneData.id };
    const data = { $set: approachOneData };
    const options = { upsert: true };

    return this.sensorDataModel.updateOne(query, data, options, (err, doc) => {
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
