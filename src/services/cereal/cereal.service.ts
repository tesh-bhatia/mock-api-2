import { Injectable } from '@nestjs/common';
import { Cereal } from 'src/data/cereal';
import { CerealApi } from './cereal.api';

@Injectable()
export class CerealService implements CerealApi {
  getCereals(): Cereal[] {
    return [];
  }
}
