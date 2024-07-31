import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { State } from './entities/state.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StatesService {
  constructor(
    @InjectRepository(State)
    private stateRepository: Repository<State>,
  ) {}
  async create(createStateDto: CreateStateDto) {
    const state = this.stateRepository.create(createStateDto);

    await this.stateRepository.save(state);
  }

  findAll() {
    return this.stateRepository.find();
  }

  findOne(id: number) {
    return this.stateRepository.findOneBy({ id });
  }

  async update(id: number, updateStateDto: UpdateStateDto) {
    const response = await this.stateRepository.update(
      {
        id,
      },
      updateStateDto,
    );

    if (!response.affected) {
      throw new NotFoundException(
        `No se ha encontrado el estado con id: ${id}`,
      );
    }
  }

  async remove(id: number) {
    const response = await this.stateRepository.softDelete(id);

    if (!response.affected) {
      throw new NotFoundException(
        `No se ha encontrado el estado con id: ${id}`,
      );
    }
  }
}
