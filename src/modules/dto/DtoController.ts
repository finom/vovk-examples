import { prefix, post } from 'vovk';
import { openapi } from 'vovk-openapi';
import { withDto } from 'vovk-dto';
import { CreateUserDto } from './dto';

@prefix('dto')
export default class DtoController {
  @openapi({
    summary: 'Create a user with DTO',
    description: 'Create a user with DTO for body validation',
  })
  @post('create-user')
  static createUser = withDto({
    body: CreateUserDto,
    async handle(req) {
      const { name, email } = await req.json();

      return {
        success: true,
        user: { name, email },
      };
    },
  });
}
