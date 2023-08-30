import type { Car } from '@prisma/client';
import {
  Controller,
  HttpCode,
  HttpStatus,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  ParseUUIDPipe,
  Body,
} from '@nestjs/common';
import { ApiParam, ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { CarCreateDto, CarUpdateDto } from './dtos';
import { CarService } from './car.service';
import { IsUuidPipe } from '@validators';

@Controller({
  path: 'car-service/',
  version: '1',
})
export class CarController {
  constructor(readonly service: CarService) {
    this.service = service;
  }

  @HttpCode(HttpStatus.OK)
  @Get('all')
  @ApiOkResponse({
    schema: {
      example: [
        {
          id: 1,
          title: 'Mers',
          price: '200000',
        },
      ],
    },
  })
  carRetriveAll(): Promise<Omit<Car, 'createdAt'>[]> {
    return this.service.carRetriveAll();
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Post()
  @ApiBody({ type: CarCreateDto })
  async carCreate(@Body() body: CarCreateDto): Promise<void> {
    await this.service.carCreate({
      ...body,
    });
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch(':id')
  @ApiParam({ name: 'id', example: '123e4567-e89b-12d3-a456-426614174000' })
  @ApiBody({ type: CarUpdateDto })
  async carUpdate(
    @Param('id', IsUuidPipe) id: string,
    @Body() body: CarUpdateDto,
  ): Promise<void> {
    await this.service.carUpdate({
      ...body,
      id,
    });
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @ApiParam({ name: 'id', example: '123e4567-e89b-12d3-a456-426614174000' })
  @ApiBody({ type: CarUpdateDto })
  async carDelete(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    await this.service.carDelete({
      id,
    });
  }
}
