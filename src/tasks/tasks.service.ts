import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    const task = this.taskRepository.create(createTaskDto);

    await this.taskRepository.save(task);
  }

  findAll() {
    return this.taskRepository.find({
      select: {
        id: true,
        title: true,
        delivery_date: true,
        category: {
          id: true,
          name: true,
        },
        state: {
          id: true,
          name: true,
        },
        user: {
          id: true,
          name: true,
        },
        priority: {
          id: true,
          name: true,
        },
      },
      relations: {
        category: true,
        state: true,
        user: true,
        priority: true,
      },
    });
  }

  findOne(id: number) {
    return this.taskRepository.findOne({
      where: {
        id,
      },

      select: {
        id: true,
        title: true,
        category: {
          id: true,
          name: true,
        },
        state: {
          id: true,
          name: true,
        },
        user: {
          id: true,
          name: true,
        },
      },
      relations: {
        category: true,
        state: true,
        user: true,
      },
    });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const response = await this.taskRepository.update(
      {
        id,
      },
      updateTaskDto,
    );

    if (!response.affected) {
      throw new NotFoundException(`No se ha encontrado la tarea con id: ${id}`);
    }
  }

  async remove(id: number) {
    const response = await this.taskRepository.softDelete(id);

    if (!response.affected) {
      throw new NotFoundException(`No se ha encontrado la tarea con id: ${id}`);
    }
  }
}
