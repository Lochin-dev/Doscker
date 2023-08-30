import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { dbconfig } from './config';
import { CarModule } from '@module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dbconfig],
      isGlobal: true,
    }),
    CarModule,
  ],
  controllers: [],
  providers: [],
})
export class App {}
