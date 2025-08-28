import * as yup from 'yup';
import { prefix, post, operation, type VovkOutput } from 'vovk';
import { withYup } from 'vovk-yup';

@prefix('users-yup')
export default class UserYupController {
  @operation({
    summary: 'Update user (Yup)',
    description: 'Update user by ID with Yup validation',
  })
  @post('{id}')
  static updateUser = withYup({
    body: yup
      .object()
      .required()
      .shape({
        name: yup.string().required().meta({ description: 'User full name' }),
        age: yup.number().min(0).max(120).required().meta({ description: 'User age' }),
        email: yup.string().email().required().meta({ description: 'User email' }),
      })
      .meta({ description: 'User object' }),
    params: yup
      .object()
      .shape({
        id: yup.string().required().meta({ description: 'User ID' }),
      })
      .required(),
    query: yup
      .object()
      .shape({
        notify: yup.string().oneOf(['email', 'push', 'none']).required().meta({ description: 'Notification type' }),
      })
      .required(),
    output: yup
      .object()
      .shape({
        success: yup.boolean().required().meta({ description: 'Success status' }),
      })
      .meta({ description: 'Response object' })
      .required(),
    async handle(req, { id }) {
      const { name, age } = await req.json();
      const notify = req.nextUrl.searchParams.get('notify');

      // do something with the data
      console.log(`Updating user ${id}:`, { name, age, notify });
      return {
        success: true,
      } satisfies VovkOutput<typeof UserYupController.updateUser>;
    },
  });
}
