import { prefix, post } from 'vovk';
import { withYup } from 'vovk-yup';
import { userSchema } from '../../yup';

@prefix('yup')
export default class YupController {
  @post('create-user', { cors: true })
  static createUser = withYup(userSchema, async (req) => {
    const { name, email } = await req.json();

    return {
      success: true,
      user: { name, email },
    };
  });
}
