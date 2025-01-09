import { prefix, post } from 'vovk';
import { withDto } from 'vovk-dto';
import { UserDto } from '../../dto';

@prefix('dto')
export default class DtoController {
  @post('create-user', { cors: true })
  static createUser = withDto(UserDto, async (req) => {
    const { name, email } = await req.json();

    return {
      success: true,
      user: { name, email },
    };
  });
}
