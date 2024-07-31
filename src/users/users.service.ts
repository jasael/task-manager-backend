import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);

    await this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find({
      select: {
        id: true,
        name: true,
      },
    });
  }

  findOne(id: number) {
    return this.userRepository.findOne({
      where: {
        id,
      },
      select: {
        password: false,
      },
    });
  }

  findByEmail(email: string) {
    return this.userRepository.findOneBy({
      email,
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const response = await this.userRepository.update(
      {
        id,
      },
      updateUserDto,
    );

    if (!response.affected) {
      throw new NotFoundException(
        `No se ha encontrado el usuario con id: ${id}`,
      );
    }
  }
}
