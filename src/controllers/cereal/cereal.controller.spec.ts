import { Test, TestingModule } from '@nestjs/testing';

import { CerealController } from './cereal.controller';
import { provider as cerealProvdier } from '../../services/cereal';

describe('AppController', () => {
  let appController: CerealController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CerealController],
      providers: [cerealProvdier],
    }).compile();

    appController = app.get<CerealController>(CerealController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getCereals()).toEqual([]);
    });
  });
});
