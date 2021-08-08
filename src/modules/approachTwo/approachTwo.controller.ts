import { Body, Controller, Put } from '@nestjs/common';
import { ApproachTwoService } from './approachTwo.service';
import { ApproachTwoRequestDto } from './dto/request/approachTwo.request.dto';
import { ApproachTwoResponseDto } from './dto/response/approachTwo.response.dto';

@Controller('approach-two')
export class ApproachTwoController {
  constructor(private approachTwoService: ApproachTwoService) {}

  @Put()
  resolveApproachOne(
    @Body() requestData: ApproachTwoRequestDto,
  ): Promise<ApproachTwoResponseDto> {
    return this.approachTwoService.putData(requestData);
  }
}
