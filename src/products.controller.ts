import { Controller, Render, Get } from '@nestjs/common';

@Controller('/products')
export class ProductsController {
  static products = [
    {
      id: '1',
      name: 'TV',
      description: 'Best tv',
      image: 'it.png',
      price: '1000',
    },
    {
      id: '2',
      name: 'Iphone',
      description: 'Best iPhone',
      image: 'berserk.png',
      price: '999',
    },
    {
      id: '3',
      name: 'Chromecast',
      description: 'Best Chromecast',
      image: 'submarine.png',
      price: '30',
    },
    {
      id: '4',
      name: 'Glasses',
      description: 'Best Glasses',
      image: 'it.png',
      price: '100',
    },
  ];

  @Get('/')
  @Render('products/index')
  index() {
    const viewData = [];
    viewData['title'] = 'Products - Online Store';
    viewData['subtitle'] = 'List of products';
    viewData['products'] = ProductsController.products;

    return {
      viewData: viewData,
    };
  }
}
