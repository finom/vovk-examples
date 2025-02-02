import { prefix, post } from 'vovk';
import { withYup } from 'vovk-yup';
import * as yup from 'yup';

@prefix('yup')
export default class YupController {
  @post('create-user', { cors: true })
  static createUser = withYup(
    yup.object({
      name: yup.string().min(2).max(20).required(),
      email: yup.string().email().required(),
    }),
    async (req) => {
      const { name, email } = await req.json();

      return {
        success: true,
        user: { name, email },
      };
    }
  );
}
