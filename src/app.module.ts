import { Module } from '@nestjs/common';
import { ApproachOneModule } from './modules/approachOne/approachOne.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    ApproachOneModule,
  ],
  controllers: [],
})
export class AppModule {}
