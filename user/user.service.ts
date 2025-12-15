import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'Hàm create 1 user';
  }

  findAll() {
    return `Hàm findAll user`;
  }

  findOne(id: number) {
    return `Hàm findOne user ${id}`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `Hàm update user ${id}`;
  }

  remove(id: number) {
    return `Hàm remove user ${id}`;
  }
}
