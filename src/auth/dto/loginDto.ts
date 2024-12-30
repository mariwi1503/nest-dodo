import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class LoginDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'joko'})
    name: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty({example: 'password'})
    password: string
}