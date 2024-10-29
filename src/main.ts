//src/main.ts
/*import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Enable CORS
  await app.listen(3000);
}
bootstrap();*/
//src/main.ts
import { NestFactory } from '@nestjs/core';
 import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: "*", 
    });
    await app.listen(3000);
}
bootstrap();

