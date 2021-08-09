import { Injectable } from '@nestjs/common';
import { ApproachOneRequestDto } from './dto/request/approachOne.request.dto';

import { ApproachOneRepository } from '../../repository/approachOne.repository';
import { ApproachOneResponseDto } from './dto/response/approachOne.response.dto';

@Injectable()
export class ApproachOneService {
  constructor(private approachOneRepo: ApproachOneRepository) {}

  async putData(
    requestData: ApproachOneRequestDto,
  ): Promise<ApproachOneResponseDto> {
    await this.approachOneRepo.updateOrCreate(requestData);
    return { id: requestData.id };
  }
}
