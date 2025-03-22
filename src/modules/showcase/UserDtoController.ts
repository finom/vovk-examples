import { IsString, IsNumber, Min, IsEmail, IsUUID, IsIn, IsBoolean } from 'class-validator';
import { JSONSchema } from 'class-validator-jsonschema';
import { prefix, post } from 'vovk';
import { openapi } from 'vovk-openapi';
import { withDto } from 'vovk-dto';

@JSONSchema({ description: 'User object' })
export class UpdateUserBodyDto {
  @IsString()
  @JSONSchema({ description: 'User full name' })
  name!: string;

  @IsNumber()
  @Min(0)
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

@prefix('users-dto')
export default class UserDtoController {
  @openapi({
    summary: 'Update user',
    description: 'Update user by ID with DTO validation',
  })
  @post(':id')
  static updateUser = withDto({
    body: UpdateUserBodyDto,
    params: UpdateUserParamsDto,
    query: UpdateUserQueryDto,
    output: UpdateUserResponseDto,
    async handle(req, { id }) {
      const { name, age, email } = await req.json();
      const notify = req.nextUrl.searchParams.get('notify');
      // do something with the data
      console.log(`Updating user ${id}:`, { name, age, email, notify });
      return { success: true };
    },
  });
}
