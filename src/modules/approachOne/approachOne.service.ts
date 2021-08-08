import { Injectable } from '@nestjs/common';
import { ApproachOneRequestDto } from './dto/request/approachOne.request.dto';
import { SensorData } from '../../database/sensorData.schema';

import { ApproachOneRepository } from '../../repository/approachOne.repository';

@Injectable()
export class ApproachOneService {
  constructor(private approachOneRepo: ApproachOneRepository) {}

  async putData(
    approachOneRequestDto: ApproachOneRequestDto,
  ): Promise<SensorData> {
    return this.approachOneRepo.updateOrCreate(approachOneRequestDto);
  }
}
