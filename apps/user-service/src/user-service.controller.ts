import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserServiceService } from './user-service.service';

@Controller()
export class UserServiceController {
  constructor(private readonly userServiceService: UserServiceService) {}

  @MessagePattern({ cmd: 'get_user' })
  getUser(@Payload() id: number) {
    return this.userServiceService.findById(id);
  }
}
