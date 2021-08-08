import { Injectable } from '@nestjs/common';
import { ApproachTwoRepository } from '../../repository/approachTwo.repository';
import { ApproachTwoRequestDto } from './dto/request/approachTwo.request.dto';
import { ApproachTwoResponseDto } from './dto/response/approachTwo.response.dto';
import { RedisCacheService } from '../redisCache/redisCache.service';

import constants from '../../lib/constants';

@Injectable()
export class ApproachTwoService {
  constructor(
    private approachTwoRepo: ApproachTwoRepository,
    private cacheService: RedisCacheService,
  ) {}

  async putData(
    requestData: ApproachTwoRequestDto,
  ): Promise<ApproachTwoResponseDto> {
    const cacheKey = constants.APPROACH_TWO.CACHE_KEY + requestData.id;

    const isSavedAlready = await this.cacheService.get(cacheKey);

    if (isSavedAlready) {
      return {
        id: requestData.id,
      };
    }

    await this.approachTwoRepo.create(requestData);

    await this.cacheService.set(cacheKey, requestData.id);

    return { id: requestData.id };
  }
}
