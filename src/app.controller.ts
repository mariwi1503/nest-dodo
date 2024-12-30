import { Controller, Get, Version, VERSION_NEUTRAL } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Version(VERSION_NEUTRAL)
  @Get()
  @ApiOperation({summary: 'For testing api health'})
  getHello(): string {
    return this.appService.getHello();
  }
}
