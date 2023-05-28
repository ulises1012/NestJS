import { Controller } from "@nestjs/common";
import { ProductsService } from "src/models/products.service";

@Controller('/cart')
export class cartController {
  constructor(private readonly productService: ProductsService) {}
}