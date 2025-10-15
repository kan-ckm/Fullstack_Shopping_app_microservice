import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3002,http://localhost:3003'],
    methods: ['PUT', 'DELETE', 'POST', 'GET', 'PATCH'],
    credentials: true,
  });
  try {
    await app.listen(process.env.PORT ?? 4005);
    console.log(`User service is running on port ${process.env.PORT ?? 4005}`);
  } catch (err) {
    console.log(err);
  }
}
bootstrap();
