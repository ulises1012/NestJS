import { Controller } from '@nestjs/common';
import { OrdersService } from 'src/models/order.service';

@Controller('/account')
export class AccountController {
  constructor(private readonly ordersService: OrdersService) {}
}
