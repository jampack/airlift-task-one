import { IsNotEmpty } from 'class-validator';

export class ApproachOneRequestDto {
  @IsNotEmpty()
  id: string; // Request ID

  @IsNotEmpty()
  sensor_id: string;

  @IsNotEmpty()
  data: string;
}
