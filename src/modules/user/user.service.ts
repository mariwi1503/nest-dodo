import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma-client/prisma.service';
import { UserDetail } from './entities';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.user.findMany();
  }

  async getOne(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException(`User doesn't exist`);

    // filter any sensitive data
    return plainToClass(UserDetail, user);
  }
}
