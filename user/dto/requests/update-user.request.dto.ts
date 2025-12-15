import { PartialType } from '@nestjs/mapped-types';
import { CreateUserRequestDto } from './create-user.request.dto';
//PartialType dùng để chỉnh attribute của CreateUserDto thành không bắt buộc
export class UpdateUserRequestDto extends PartialType(CreateUserRequestDto) { }
