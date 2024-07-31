import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepository.create(createCategoryDto);

    await this.categoryRepository.save(category);
  }

  findAll() {
    return this.categoryRepository.find();
  }

  findOne(id: number) {
    return this.categoryRepository.findOneBy({ id });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const response = await this.categoryRepository.update(
      {
        id,
      },
      updateCategoryDto,
    );

    if (!response.affected) {
      throw new NotFoundException(
        `No se ha encontrado la categoría con id: ${id}`,
      );
    }
  }

  async remove(id: number) {
    const response = await this.categoryRepository.softDelete(id);

    if (!response.affected) {
      throw new NotFoundException(
        `No se ha encontrado la categoría con id: ${id}`,
      );
    }
  }
}
