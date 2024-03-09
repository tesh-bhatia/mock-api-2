import { Body, Controller, Get, Post } from '@nestjs/common';
import { CerealApi } from '../../services/cereal/cereal.api';

@Controller()
export class CerealController {
  constructor(private readonly service: CerealApi) {}

  @Get('v1/cereal')
  getCereals() {
    return this.service.getCereals();
  }

  @Post('v1/cereal')
  createCereal(@Body() cereal: any) {
    return this.service.createCereal(cereal);
  }
}
