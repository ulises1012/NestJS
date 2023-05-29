import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './models/product.entity';
import { ProductsService } from './models/products.service';
import { AdminModule } from './admin/admin.module';
import { AuthModule} from './auth/auth.module';
import { UsersService } from './models/user.service';
import { User } from './models/user.entity';
import { CartModule } from './cart/cart.module';
import { Order } from './models/order.entity';
import { OrdersService } from './models/order.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'postgres',
      password: '123',
      database: 'nest',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Product, User, Order]),
    AdminModule,
    AuthModule,
    CartModule,
  ],
  controllers: [AppController, ProductsController],
  providers: [ProductsService, UsersService, OrdersService],
  exports:[ProductsService, UsersService, OrdersService],
})
export class AppModule {}
