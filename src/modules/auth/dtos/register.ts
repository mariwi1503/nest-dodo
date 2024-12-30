import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: 'example@mail.com' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: 'Raka' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true, example: 'Password1' })
  password: string;
}
