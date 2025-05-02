import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ApiGatewayService {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
    @Inject('TEST_SERVICE') private readonly testClient: ClientProxy,
  ) {}

  async getUser(id: string): Promise<any> {
    return await firstValueFrom(this.userClient.send({ cmd: 'get_user' }, id));
  }

  async getTests(): Promise<any> {
    return await firstValueFrom(this.testClient.send({ cmd: 'get_test' }, {}));
  }
}
