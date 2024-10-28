// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://your-frontend-url.vercel.app', // Replace with your frontend URL
  });
  await app.listen(3000);
}
bootstrap();
