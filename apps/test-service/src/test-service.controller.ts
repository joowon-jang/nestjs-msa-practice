import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { TestServiceService } from './test-service.service';

@Controller()
export class TestServiceController {
  constructor(private readonly testServiceService: TestServiceService) {}

  @MessagePattern({ cmd: 'get_test' })
  getTest() {
    return this.testServiceService.findAll();
  }
}
