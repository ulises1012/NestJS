import { Controller } from "@nestjs/common";
import { UsersService } from "src/models/user.service";


@Controller('/auth')
export class AuthController {
  constructor(private readonly userService: UsersService) {}
}