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
/*import { NestFactory } from '@nestjs/core';

 import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: "*", 
    });
    await app.listen(3000);
}
bootstrap();*/
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS with custom options
  app.use(cors({
    origin: 'https://to-do-app-frontend-xi.vercel.app/', // Your React frontend URL
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  }));

  // Alternatively, you can use Nest's built-in CORS support
  // app.enableCors({
  //   origin: 'http://localhost:3000',
  //   methods: 'GET,POST,PUT,DELETE',
  //   credentials: true,
  // });

  await app.listen(3000);
}
bootstrap();


