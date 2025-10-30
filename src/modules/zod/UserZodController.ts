import { z } from 'zod';
import { prefix, post, operation, type VovkOutput } from 'vovk';
import { withZod } from 'vovk-zod';

@prefix('users-zod')
export default class UserZodController {
  @operation({
    summary: 'Update user (Zod)',
    description: 'Update user by ID with Zod validation',
  })
  @post('{id}')
  static updateUser = withZod({
    body: z
      .object({
        name: z.string().meta({ description: 'User full name' }),
        age: z.number().min(0).max(120).meta({ description: 'User age' }),
        email: z.email().meta({ description: 'User email' }),
      })
      .meta({ description: 'User object' }),
    params: z.object({
      id: z.uuid().meta({ description: 'User ID' }),
    }),
    query: z.object({
      notify: z.enum(['email', 'push', 'none']).meta({ description: 'Notification type' }),
    }),
    output: z
      .object({
        success: z.boolean().meta({ description: 'Success status' }),
      })
      .meta({ description: 'Response object' }),
    async handle(req, { id }) {
      const { name, age } = await req.json();
      const notify = req.nextUrl.searchParams.get('notify');

      // do something with the data
      console.log(`Updating user ${id}:`, { name, age, notify });
      return {
        success: true,
      } satisfies VovkOutput<typeof UserZodController.updateUser>;
    },
  });
}
