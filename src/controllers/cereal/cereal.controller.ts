import { Controller, Get, Put } from '@nestjs/common';
import { CerealApi } from '../../services/cereal/cereal.api';

@Controller()
export class CerealController {
  constructor(private readonly service: CerealApi) {}

  @Get('v1/cereal')
  getCereals() {
    return this.service.getCereals();
  }

  @Put('v1/cereal')
    updateCereal() {
        return this.service.getCereals();
    }
}
