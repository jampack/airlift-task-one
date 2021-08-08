import { Controller, Put, Body } from '@nestjs/common';
import { ApproachOneRequestDto } from './dto/request/approachOne.request.dto';
import { ApproachOneService } from './approachOne.service';
import { ApproachOneResponseDto } from './dto/response/approachOne.response.dto';

@Controller('approach-one')
export class ApproachOneController {
  constructor(private approachOneService: ApproachOneService) {}

  @Put()
  resolveApproachOne(
    @Body() requestData: ApproachOneRequestDto,
  ): Promise<ApproachOneResponseDto> {
    return this.approachOneService.putData(requestData);
  }
}
