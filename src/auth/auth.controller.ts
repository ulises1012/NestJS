import { Body, Controller, Get, Post, Redirect, Render } from "@nestjs/common";
import { UsersService } from "src/models/user.service";


@Controller('/auth')
export class AuthController {
  constructor(private readonly userService: UsersService) {}

  @Get('/register')
  @Render('auth/register')
  register() {
    const viewData = [];
    viewData['title'] = 'User Register - Online Store';
    viewData['subtitle'] = 'User Register';

    return {
      viewData: viewData,
    }
  }
}