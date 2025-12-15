import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
//PartialType dùng để chỉnh attribute của CreateUserDto thành không bắt buộc
export class UpdateUserDto extends PartialType(CreateUserDto) {}
