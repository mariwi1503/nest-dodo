import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateUserDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({required: true, example: 1})
    id: number

    @IsString()
    @IsNotEmpty()
    @ApiProperty({required: true, example: 'Raka'})
    name: string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({required: true, example: 100})
    age: number
}