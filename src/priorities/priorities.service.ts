import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePriorityDto } from './dto/create-priority.dto';
import { UpdatePriorityDto } from './dto/update-priority.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Priority } from './entities/priority.entity';

@Injectable()
export class PrioritiesService {
  constructor(
    @InjectRepository(Priority)
    private priorityRepository: Repository<Priority>,
  ) {}

  async create(createPriorityDto: CreatePriorityDto) {
    const priority = this.priorityRepository.create(createPriorityDto);

    await this.priorityRepository.save(priority);
  }

  findAll() {
    return this.priorityRepository.find();
  }

  findOne(id: number) {
    return this.priorityRepository.findOneBy({ id });
  }

  async update(id: number, updatePriorityDto: UpdatePriorityDto) {
    const response = await this.priorityRepository.update(
      {
        id,
      },
      updatePriorityDto,
    );

    if (!response.affected) {
      throw new NotFoundException(
        `No se ha encontrado la prioridad con id: ${id}`,
      );
    }
  }

  async remove(id: number) {
    const response = await this.priorityRepository.softDelete(id);

    if (!response.affected) {
      throw new NotFoundException(
        `No se ha encontrado la prioridad con id: ${id}`,
      );
    }
  }
}
