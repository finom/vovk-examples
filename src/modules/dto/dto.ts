import { IsString, IsEmail, MinLength, MaxLength, IsUUID } from 'class-validator';
import { OmitType } from 'vovk-mapped-types';
import { JSONSchema, validationMetadatasToSchemas, targetConstructorToSchema } from 'class-validator-jsonschema';

@JSONSchema({
  description: 'User DTO',
})
export default class UserDto {
  @IsUUID(4, { message: 'Invalid uuid format' })
  id: string;

  @IsString({ message: 'Name must be a string' })
  @MinLength(2, { message: 'Name must be at least 2 characters' })
  @MaxLength(20, { message: 'Name cannot exceed 20 characters' })
  name: string;

  @IsString({ message: 'Email must be a string' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;
}

@JSONSchema({
  description: 'Create user DTO',
})
export class CreateUserDto extends OmitType(UserDto, ['id'] as const) {}
