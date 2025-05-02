import { Controller, Get, Param } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';

@Controller()
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) {}

  @Get('/user/get/:id')
  getUser(@Param('id') id: string) {
    return this.apiGatewayService.getUser(id);
  }

  @Get('/test/get/')
  getTests() {
    return this.apiGatewayService.getTests();
  }
}
