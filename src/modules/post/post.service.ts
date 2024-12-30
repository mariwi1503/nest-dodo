import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma-client/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.post.findMany();
  }

  async getOne(id: number) {
    const post = await this.prisma.post.findUnique({ where: { id } });
    if (!post) throw new NotFoundException(`Post doesn't exist`);
    return post;
  }
}
