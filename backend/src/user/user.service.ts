import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as crypto from 'crypto';
import * as nodemailer from 'nodemailer';
import { Transporter } from 'nodemailer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    // Convertir password a SHA1 para comparar con el almacenado
    const hashedPassword = crypto
      .createHash('sha1')
      .update(password)
      .digest('hex');

    const user = await this.userRepo.findOne({
      where: { email, password: hashedPassword },
    });

    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    if (user.isverified === 0) {
      throw new UnauthorizedException('Cuenta no verificada');
    }

    return user;
  }

  /* Register New User */
  async registerUser(ncompleto: string, username: string, email: string, password: string, telefono: string) {
    const exist = await this.userRepo.findOne({ where: { email } });
    if (exist) throw new BadRequestException('El correo ya está registrado');

    const hashedPassword = crypto
      .createHash('sha1')
      .update(password)
      .digest('hex');
    const veritoken = crypto.randomBytes(20).toString('hex'); // token de confirmación

    const newUser = this.userRepo.create({
      ncompleto,
      username,
      email,
      password: hashedPassword,
      telefono,
      fecha: new Date(),
      isverified: 0,
      veritoken,
      status: 1,
      idrol: 3,
      idinfopgt: 1,
    });

    await this.userRepo.save(newUser);

    // Enviar correo con el link de verificación
    await this.sendVerificationEmail(email, veritoken);

    return {
      message: 'Usuario registrado. Revisa tu correo para verificar la cuenta',
    };
  }
  /*********************/

  /* Send Email Verification */
  private async sendVerificationEmail(email: string, token: string) {
    const transporter: Transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER as string,
        pass: process.env.MAIL_PASS as string,
      },
    }) as Transporter;

    //const url = `${process.env.FRONTEND_URL}/verify/${token}`;
    const url = `${process.env.BACKEND_URL}/auth/verify/${token}`;

    await transporter.sendMail({
      from: `"InfopGT - Plataforma Información Pública" <${process.env.MAIL_USER}>`,
      to: email,
      subject: 'Confirma tu cuenta',
      html: `<p>Haz click en el siguiente enlace para verificar tu cuenta:</p>
             <a href="${url}">${url}</a>`,
    });
  }
  /***************************/

  /* Verify Token User */
  async verifyUser(token: string) {
    const user = await this.userRepo.findOne({ where: { veritoken: token } });
    if (!user) throw new BadRequestException('Token inválido');

    user.isverified = 1;
    user.veritoken = null;

    await this.userRepo.save(user);

    return {
      message: 'Cuenta verificada correctamente, ya puedes iniciar sesión',
    };
  }
  /*********************/

  findAll(): Promise<User[]> {
    return this.userRepo.find();
  }
}