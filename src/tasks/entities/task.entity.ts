import { Category } from 'src/categories/entities/category.entity';
import { State } from 'src/states/entities/state.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  title: string;

  @Column({ nullable: true, type: 'text' })
  description: string;

  @Column()
  category_id: number;

  @Column()
  user_id: number;

  @Column()
  state_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;

  @ManyToOne(() => State, (state) => state.tasks)
  state: State;

  @ManyToOne(() => Category, (category) => category.tasks)
  category: Category;
}
