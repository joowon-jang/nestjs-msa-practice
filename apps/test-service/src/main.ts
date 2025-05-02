import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { TestServiceModule } from './test-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TestServiceModule,
    {
      transport: Transport.TCP,
      options: { host: 'localhost', port: 3002 },
    },
  );

  await app.listen();
}
void bootstrap();
