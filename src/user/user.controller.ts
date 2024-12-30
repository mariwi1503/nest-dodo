import { Body, Controller, Get, Post, UseGuards, VersioningType } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtGuard } from '../auth/jwt.guard';

@Controller('user')
@ApiBearerAuth()
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    @UseGuards(JwtGuard)
    getAll() {
        return this.userService.getAll()
    }

    @Post()
    @UseGuards(JwtGuard)
    create(@Body() body: CreateUserDto) {
        return this.userService.create(body)
    }
}
