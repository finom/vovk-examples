import { IsString, IsNumber, Min, IsEmail, IsUUID, IsIn, IsBoolean, Max } from 'class-validator';
import { JSONSchema } from 'class-validator-jsonschema';

@JSONSchema({ description: 'User object' })
export class UpdateUserBodyDto {
  @IsString()
  @JSONSchema({ description: 'User full name' })
  name!: string;

  @IsNumber()
  @Min(0)
  @Max(120)
  @JSONSchema({ description: 'User age' })
  age!: number;

  @IsEmail()
  @JSONSchema({ description: 'User email' })
  email!: string;
}

@JSONSchema({ description: 'Path parameters' })
export class UpdateUserParamsDto {
  @IsUUID()
  @JSONSchema({ description: 'User ID' })
  id!: string;
}

@JSONSchema({ description: 'Query parameters' })
export class UpdateUserQueryDto {
  @IsIn(['email', 'push', 'none'])
  @JSONSchema({ description: 'Notification type' })
  notify!: string;
}

@JSONSchema({ description: 'Response object' })
export class UpdateUserResponseDto {
  @IsBoolean()
  @JSONSchema({ description: 'Success status' })
  success!: boolean;
}
