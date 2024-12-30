import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dtos';
import { ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login' })
  login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }

  @Post('register')
  @ApiOperation({ summary: 'Register' })
  register(@Body() body: RegisterDto) {
    return this.authService.register(body);
  }
}
