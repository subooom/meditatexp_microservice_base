import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { GET_SERVICE_PORT, SERVICE_NAMES } from './constants/constants';

// logging libraries: *pino*, bunion, winston
// import pino from 'pino';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: GET_SERVICE_PORT(SERVICE_NAMES.NOTIFICATION),
      },
    },
  );
  await app.listen();
}
bootstrap();
