// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',        // Replace with your MySQL host
      port: 3306,               // Default MySQL port
      username: 'your_mysql_user', // Replace with your MySQL username
      password: 'your_mysql_password', // Replace with your MySQL password
      database: 'todo_db',      // Database name (Create in MySQL)
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,        // Set to false in production
    }),
    TodoModule,
  ],
})
export class AppModule {}

