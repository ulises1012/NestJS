import { Entity } from "typeorm";
import { User } from "./user.entity";


@Entity()
export class Order {

  id: number;
  total: number;
  date: Date;
  user: User;
  item: Item[];
}
