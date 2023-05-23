import { Controller, Render, Get, Param } from '@nestjs/common';
import { ProductsService } from './models/products.service';

@Controller('/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('/')
  @Render('products/index')
  async index() {
    const viewData = [];
    viewData['title'] = 'Products - Online Store';
    viewData['subtitle'] = 'List of products';
    viewData['products'] = await this.productsService.findAll();

    return {
      viewData: viewData,
    };
  }

  @Get('/:id')
  @Render('products/show')
  show(@Param() params) {
    const product = ProductsController.products[params.id - 1];
    const viewData = [];
    viewData['title'] = product.name + ' - Online Store';
    viewData['subtitle'] = product.name + '- Product Information';
    viewData['product'] = product;

    return {
      viewData: viewData,
    };
  }
}
