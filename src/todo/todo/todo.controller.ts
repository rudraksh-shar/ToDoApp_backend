// src/todo/todo.controller.ts
import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  
  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Post()
  create(@Body('title') title: string) {
    return this.todoService.create(title);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body('completed') completed: boolean) {
    return this.todoService.update(+id, completed);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
