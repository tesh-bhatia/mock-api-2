import { CerealApi } from './cereal.api';
import { CerealService } from './cereal.service';

export * from './cereal.api';

export const provider = {
  provide: CerealApi,
  useClass: CerealService,
};
