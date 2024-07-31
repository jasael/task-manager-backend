import { Category } from 'src/categories/entities/category.entity';
import { Priority } from 'src/priorities/entities/priority.entity';
import { State } from 'src/states/entities/state.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
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
  delivery_date: Date;

  @Column()
  category_id: number;

  @Column()
  user_id: number;

  @Column()
  state_id: number;

  @Column()
  priority_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => User, (user) => user.tasks)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => State, (state) => state.tasks)
  @JoinColumn({ name: 'state_id' })
  state: State;

  @ManyToOne(() => Category, (category) => category.tasks)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @ManyToOne(() => Priority, (priority) => priority.tasks)
  @JoinColumn({ name: 'priority_id' })
  priority: Priority;
}
