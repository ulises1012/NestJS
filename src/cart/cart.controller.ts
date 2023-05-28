import { Controller, Get, Render, Req } from "@nestjs/common";
import { Product } from "src/models/product.entity";
import { ProductsService } from "src/models/products.service";

@Controller('/cart')
export class cartController {
  constructor(private readonly productService: ProductsService) {}

  @Get('/')
  @Render('cart/index')
  async index(@Req() request) {
    let total = 0;
    let productsInCart: Product[] = null;
    const productsInSession = request.session.products;

    if (productsInSession) {
      productsInCart = await this.productService.findByIds(
        Object.keys(productsInSession),
      );
      total = Product.sumPricesByQuantities(productsInCart, productsInSession);
    }

    const viewData = [];
    viewData['title'] = 'Cart - Online Store';
    viewData['subtitle'] = 'Shopping Cart';
    viewData['total'] = total;
    viewData['productsInCart'] = productsInCart;

    return {
      viewData: viewData,
    };
  }
}