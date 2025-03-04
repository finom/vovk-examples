import { prefix, post } from 'vovk';
import { openapi } from 'vovk-openapi';
import { withYup } from 'vovk-yup';
import * as yup from 'yup';

@prefix('yup')
export default class YupController {
  @openapi({
    summary: 'Create a user with Yup',
    description: 'Create a user with Yup for body validation',
  })
  @post('create-user')
  static createUser = withYup({
    body: yup.object({
      name: yup.string().min(2).max(20).required(),
      email: yup.string().email().required(),
    }),
    async handle(req) {
      const { name, email } = await req.json();

      return {
        success: true,
        user: { name, email },
      };
    },
  });
}
