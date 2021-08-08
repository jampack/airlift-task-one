import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SensorDataDocument = SensorData & Document;

@Schema()
export class SensorData {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  sensor_id: string;

  @Prop()
  data: string;
}

export const SensorDataSchema = SchemaFactory.createForClass(SensorData);
