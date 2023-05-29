import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  total: number;
  @CreateDateColumn()
  date: Date;
  @ManyToOne(() => User, (user) => user.orders)
  user: User;
  @OneToMany(() => Item, (item) => item.order)
  item: Item[];

  getId(): number {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }

  getTotal(): number {
    return this.total;
  }

  setTotal(total: number) {
    this.total = total;
  }

  getDate(): Date {
    return this.date;
  }

  setDate(date: Date) {
    this.date = date;
  }

  getUser(): User {
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
  }

  getItem(): Item {
    return this.item;
  }

  setItem(item: Item) {
    this.item = item;
  }
 
}
