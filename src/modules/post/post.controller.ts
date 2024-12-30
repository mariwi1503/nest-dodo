import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PostService } from './post.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  @ApiOperation({ summary: 'Get all posts' })
  getAll() {
    return this.postService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one post' })
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.postService.getOne(id);
  }
  // NOTE = ParseIntPipe merubah string di path parameter ke angka sebelum masuk ke handler
}
