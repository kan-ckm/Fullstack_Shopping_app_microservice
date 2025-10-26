import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  try {
    await app.listen(process.env.PORT ?? 4005);
    console.log(`Api-gateway service is running on port ${process.env.PORT ?? 5001}`);
  } catch (err) {
    console.log(err);
  }
}
bootstrap();
