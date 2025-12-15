import { Exclude } from 'class-transformer';

export class UserResponseDto {
  id: number;
  email: string;
  name: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

