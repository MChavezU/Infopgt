import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  Get,
  Param,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service'; // importa el servicio de usuarios

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService, // inyectamos userService
  ) {}

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    try {
      const user = await this.authService.validateUser(email, password);
      return this.authService.login(user);
    } catch {
      throw new UnauthorizedException('Credenciales inválidas');
    }
  }

  /* Endpoint Verificación*/
  /*  @Get('verify/:token')
  async verifyUser(@Param('token') token: string) {
    return this.userService.verifyUser(token);
  } */
  /***********************/
  @Get('verify/:token')
  async verify(@Param('token') token: string) {
    const result = await this.userService.verifyUser(token);
    return `
      <html>
        <head><title>Verificación</title></head>
        <body style="font-family: Arial; text-align: center; margin-top: 50px;">
          <h2>${result.message}</h2>
          <a href="${process.env.FRONTEND_URL}/">Ir a iniciar sesión</a>
        </body>
      </html>
    `;
  }
}