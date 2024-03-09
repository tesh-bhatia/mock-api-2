import { Test, TestingModule } from '@nestjs/testing';

import { CerealController } from './cereal.controller';
import { provider as cerealProvdier } from '../../services/cereal';
import {provider as cerealRepoProvider } from '../../data/repositories/cereal';

describe('AppController', () => {
  let appController: CerealController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CerealController],
      providers: [cerealProvdier, cerealRepoProvider],
    }).compile();

    appController = app.get<CerealController>(CerealController);
  });

  describe('getCereals', () => {
    it('should return all the cereals', async () => {
      const cereals = await appController.getCereals();
      expect(cereals).toHaveLength(20);
      expect(cereals).toContainEqual(expect.objectContaining({ "flavor": "sweet", "id": "1", "manufacturer": "General Mills", "name": "Honey Nut Cheerios", "type": "corn"}));
  });
});
})
