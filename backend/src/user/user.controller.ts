import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const user = await this.userService.validateUser(email, password);

    return {
      message: 'Login exitoso',
      user: {
        id: user.iduser,
        nombre: user.ncompleto,
        email: user.email,
        idrol: user.idrol,
      },
    };
  }

  @Post('register')
  async register(
    @Body('nombre') nombre: string,
    @Body('username') username: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('telefono') telefono: string,
  ) {
    return this.userService.registerUser(nombre, username, email, password, telefono);
  }

  @Get('verify/:token')
  async verify(@Param('token') token: string) {
    return this.userService.verifyUser(token);
  }

  @Get()
  getAll() {
    return this.userService.findAll();
  }
}