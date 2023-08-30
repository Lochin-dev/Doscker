import type { Car } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma';
import type {
  CarCreateRequest,
  CarDeleteRequest,
  CarUpdateRequest,
} from './interfaces';

@Injectable()
export class CarService {
  readonly #_prisma: PrismaService;

  constructor(prisma: PrismaService) {
    this.#_prisma = prisma;
  }

  async carRetriveAll(): Promise<Omit<Car, 'createdAt'>[]> {
    return this.#_prisma.car.findMany({
      select: {
        id: true,
        title: true,
        price: true,
      },
    });
  }

  async carCreate(payload: CarCreateRequest): Promise<void> {
    await this.#_prisma.car.create({
      data: {
        title: payload.title,
        price: payload.price,
      },
    });
  }

  async carUpdate(payload: CarUpdateRequest): Promise<void> {
    await this.#_prisma.car.update({
      where: {
        id: payload.id,
      },
      data: {
        title: payload.title,
        price: payload.price,
      },
    });
  }

  async carDelete(payload: CarDeleteRequest) {
    await this.#_prisma.car.delete({
      where: {
        id: payload.id,
      },
    });
  }
}
