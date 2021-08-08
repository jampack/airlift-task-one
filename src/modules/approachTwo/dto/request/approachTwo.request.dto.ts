import { IsNotEmpty } from 'class-validator';

export class ApproachTwoRequestDto {
  @IsNotEmpty()
  id: string; // Request ID

  @IsNotEmpty()
  sensor_id: string;

  @IsNotEmpty()
  data: string;
}
