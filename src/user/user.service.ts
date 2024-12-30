import { ConflictException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException, UnprocessableEntityException, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../auth/dto/loginDto';

const dataUSer = [
    {
        id: 1,
        name: 'Joko',
        age: 100
    }, {
        id: 2,
        name: 'Raka',
        age: 100
    }, {
        id: 3,
        name: 'Kaesang',
        age: 100
    },
]

@Injectable()
export class UserService {
    constructor() {}
    
    getAll() {
        return dataUSer
    }

    create(payload: CreateUserDto) {
        const userExist = dataUSer.find(x => x.id === payload.id)
        if (userExist) throw new ConflictException('ID has been used')
        dataUSer.push(payload)
    }
}
