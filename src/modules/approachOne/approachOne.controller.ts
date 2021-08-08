import { Controller, Put, Body } from '@nestjs/common';
import { ApproachOneRequestDto } from './dto/request/approachOne.request.dto';
import { ApproachOneService } from './approachOne.service';

@Controller('approach-one')
export class ApproachOneController {
  constructor(private approachOneService: ApproachOneService) {}

  @Put()
  resolveApproachOne(@Body() approachOneRequestDto: ApproachOneRequestDto) {
    return this.approachOneService.putData(approachOneRequestDto);
  }
}
