import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser())
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors({
    origin: ['http://localhost:3002,http://localhost:3003'],
    methods: ['DELETE', 'PATCH', 'GET', 'PUT', 'POST'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  try {
    await app.listen(process.env.PORT ?? 4004);
    console.log(`Auth service is running on port ${process.env.PORT ?? 4004}`);

  } catch (err) {
    console.error('Error starting the server:', err);
  }
}
bootstrap();
