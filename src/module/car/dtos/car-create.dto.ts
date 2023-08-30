import {
  IsString,
  IsNotEmpty,
  ValidateIf,
  IsOptional,
  IsMimeType,
} from 'class-validator';
import type { CarCreateRequest } from '../interfaces';

export class CarCreateDto implements CarCreateRequest {
  @IsString()
  @IsNotEmpty({ message: 'Bosh bolishi mumkin emas' })
  title: string;

  @IsString()
  @IsNotEmpty({ message: 'Bosh bolishi mumkin emas' })
  price: string;

  @ValidateIf((object: CarCreateDto) => !object.mimetype)
  @IsNotEmpty()
  @IsOptional()
  image?: string;

  @ValidateIf((object: CarCreateDto) => !object.image)
  @IsMimeType()
  @IsNotEmpty()
  @IsOptional()
  mimetype?: string;
}
