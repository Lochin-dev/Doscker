import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { CarUpdateRequest } from '../interfaces';

export class CarUpdateDto implements Omit<CarUpdateRequest, 'id'> {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  price?: string;

}
