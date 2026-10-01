import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AuthModule, {
    transport: Transport.TCP,
    options: {
      host: process.env.HOST_NAME || 'localhost',
      port: Number(process.env.PORT) || 3001,
    },
  });
  await app.listen();
}
bootstrap().catch((err) => {
  console.log(err);
  process.exit(1);
});
