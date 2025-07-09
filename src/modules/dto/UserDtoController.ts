
import { prefix, post } from 'vovk';
import { openapi } from 'vovk-openapi';
import { withDto } from 'vovk-dto';
import { UpdateUserBodyDto, UpdateUserParamsDto, UpdateUserQueryDto, UpdateUserResponseDto } from './UserDto';

@prefix('users-dto')
export default class UserDtoController {
  @openapi({
    summary: 'Update user',
    description: 'Update user by ID with DTO validation',
  })
  @post('{id}')
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
      return {
        success: true,
      } satisfies UpdateUserResponseDto;
    },
  });
}
