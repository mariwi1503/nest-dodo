import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  VersioningType,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtGuard } from '../auth/jwt.guard';
import { GetUserId } from 'src/decorators';

@Controller('user')
@ApiBearerAuth()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('profile')
  @ApiOperation({ summary: 'Get user profile' })
  @UseGuards(JwtGuard)
  getAll(@GetUserId() userId: number) {
    return this.userService.getOne(userId);
  }
}
