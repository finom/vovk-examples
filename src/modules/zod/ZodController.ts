import { prefix, post } from 'vovk';
import { withZod } from 'vovk-zod';
import { userSchema } from '../../zod';

@prefix('zod')
export default class ZodController {
  @post('create-user', { cors: true })
  static createUser = withZod(userSchema, async (req) => {
    const { name, email } = await req.json();

    return {
      success: true,
      user: { name, email },
    };
  });
}
