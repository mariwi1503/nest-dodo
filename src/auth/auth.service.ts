import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/loginDto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService, private config: ConfigService) {}
    
    login(payload: LoginDto) {
        const access_token: string = this.jwtService.sign(
            { sub: 'user ID' },
            { expiresIn: "30d", secret: this.config.getOrThrow('JWT_SECRET') }
          );
          
        return {access_token}
    }
}
