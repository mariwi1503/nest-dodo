import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'example@mail.com' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Password1' })
  password: string;
}
