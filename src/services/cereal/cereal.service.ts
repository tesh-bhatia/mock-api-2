import { Injectable } from '@nestjs/common';
import { Cereal } from 'src/data/cereal';
import { CerealApi } from './cereal.api';
import { CerealRepoApi } from '../../data/repositories/cereal/cereal.repo.api';

@Injectable()
export class CerealService implements CerealApi {
  constructor(private readonly repo: CerealRepoApi) {}

  async getCereals(): Promise<Cereal[]> {
    return await this.repo.getAllCereals();
  }

  createCereal(cereal: any): Cereal {
    return this.repo.createCereal(cereal);
  }

  deleteCereal(id: number): void {
    return this.repo.deleteCereal(id);
  }
}
