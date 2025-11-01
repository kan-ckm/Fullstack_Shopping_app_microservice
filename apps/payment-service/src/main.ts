import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3002,http://localhost:3003'],
    methods: ['DELETE', 'PATCH', 'GET', 'PUT', 'POST'],
    credentials: true,
  });
  try {
    await app.listen(process.env.PORT ?? 3009);
    console.log(
      `Payment service is running on port ${process.env.PORT ?? 4005}`,
    );
  } catch (err) {
    console.error('Error starting the server:', err);
  }
}
bootstrap();
