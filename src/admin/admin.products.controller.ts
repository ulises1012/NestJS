import { Controller } from "@nestjs/common";
import { ProductsService } from "src/models/products.service";


@Controller('/admin/products')
export class AdminProductsController {
  constructor(private readonly productsService: ProductsService) {}
}