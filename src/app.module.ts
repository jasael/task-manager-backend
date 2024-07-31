import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { StatesModule } from './states/states.module';
import { TasksModule } from './tasks/tasks.module';
import { User } from './users/entities/user.entity';
import { Category } from './categories/entities/category.entity';
import { State } from './states/entities/state.entity';
import { Task } from './tasks/entities/task.entity';
import { PrioritiesModule } from './priorities/priorities.module';
import { Priority } from './priorities/entities/priority.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [User, Category, State, Priority, Task],
      synchronize: process.env.NODE_ENV !== 'production',
    }),
    TasksModule,
    CategoriesModule,
    StatesModule,
    UsersModule,
    PrioritiesModule,
    AuthModule,
  ],
})
export class AppModule {}
