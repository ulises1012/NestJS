import validator from 'validator';

export class ProductValidator {
  static imageWhiteList: string[] = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp',
  ];
}
