import { CerealRepoApi } from './cereal.repo.api';
import { CerealRepo } from './cereal.repo';

export * from './cereal.repo';

export const provider = {
    provide: CerealRepoApi,
    useClass: CerealRepo,
  };