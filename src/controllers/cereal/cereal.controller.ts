import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CerealApi } from '../../services/cereal/cereal.api';

@Controller()
export class CerealController {
  constructor(private readonly service: CerealApi) {}

  @Get('v1/cereal')
  getCereal() {
    return this.service.getCereal();
  }

  @Post('v1/cereal')
  createCereal(@Body() cereal: any) {
    return this.service.createCereal(cereal);
  }

  @Delete('v1/cereal/:id')
  deleteCereal(id: number) {
    return this.service.deleteCereal(id);
  }
}
