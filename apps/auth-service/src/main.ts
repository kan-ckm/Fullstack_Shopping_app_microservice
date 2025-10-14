import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3002,http://localhost:3003'],
    methods: ['DELETE', 'PATCH', 'GET', 'PUT', 'POST'],
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 4004);
}
bootstrap();
