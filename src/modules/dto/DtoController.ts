import { prefix, post } from 'vovk';
import { withDto } from 'vovk-dto';
import { UpdateUserDto } from './dto';

@prefix('dto')
export default class DtoController {
  @post('create-user', { cors: true })
  static createUser = withDto(UpdateUserDto, async (req) => {
    const { name, email } = await req.json();

    return {
      success: true,
      user: { name, email },
    };
  });
}
