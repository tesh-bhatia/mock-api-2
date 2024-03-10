import { Injectable } from '@nestjs/common';
import { Cereal } from 'src/data/cereal';
import { CerealApi } from './cereal.api';
import { CerealRepoApi } from '../../data/repositories/cereal/cereal.repo.api';

@Injectable()
export class CerealService implements CerealApi {
  constructor(private readonly repo: CerealRepoApi) {}

  async getCereal(): Promise<Cereal[]> {
    return await this.repo.getAllCereals();
  }

  async createCereal(cereal: any): Promise<Cereal> {
    return await this.repo.createCereal(cereal);
  }

  async deleteCereal(id: number): Promise<void> {
    return await this.repo.deleteCereal(id);
  }
}
