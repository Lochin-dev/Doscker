import { Module } from '@nestjs/common';
import { PrismaService } from '@prisma';
import { CarService } from './car.service';
import { CarController } from './car.controller';

@Module({
  providers: [PrismaService, CarService],
  controllers: [CarController],
})
export class CarModule {}
