import {
  ConflictException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { LoginDto, RegisterDto } from './dtos';
import { PrismaService } from 'src/prisma-client/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private config: ConfigService,
    private prisma: PrismaService,
  ) {}

  async login(payload: LoginDto) {
    const { email, password } = payload;
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new UnprocessableEntityException(`Email not found`);
    if (user.password !== password)
      throw new UnprocessableEntityException(`Wrong password!`);

    const access_token: string = this.jwtService.sign(
      { sub: user.id },
      { expiresIn: '30d', secret: this.config.getOrThrow('JWT_SECRET') },
    );

    return { access_token };
  }

  async register(payload: RegisterDto) {
    const { email, name, password } = payload;

    const user_exist = await this.prisma.user.findUnique({ where: { email } });
    if (user_exist) throw new ConflictException(`Email has been used`);

    // TODO = hash password
    await this.prisma.user.create({
      data: { email, name, password },
    });
  }
}
