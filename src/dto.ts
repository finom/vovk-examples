import { IsString, IsEmail, MinLength, MaxLength } from 'class-validator';

export class UserDto {
  @IsString({ message: 'Name must be a string' })
  @MinLength(2, { message: 'Name must be at least 2 characters' })
  @MaxLength(20, { message: 'Name cannot exceed 20 characters' })
  name: string;

  @IsString({ message: 'Email must be a string' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;
}
