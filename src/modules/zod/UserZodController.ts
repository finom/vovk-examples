import { z } from 'zod/v4';
import { prefix, post, type VovkOutput } from 'vovk';
import { openapi } from 'vovk-openapi';
import { withZod } from 'vovk-zod';

@prefix('users')
export default class UserController {
  @openapi({
    summary: 'Update user',
    description: 'Update user by ID with Zod validation',
  })
  @post('{id}')
  static updateUser = withZod({
    body: z
      .object({
        name: z.string().describe('User full name'),
        age: z.number().min(0).describe('User age'),
        email: z.email().describe('User email'),
      })
      .describe('User object'),
    params: z.object({
      id: z.uuid().describe('User ID'),
    }),
    query: z.object({
      notify: z.enum(['email', 'push', 'none']).describe('Notification type'),
    }),
    output: z
      .object({
        success: z.boolean().describe('Success status'),
      })
      .describe('Response object'),
    async handle(req, { id }) {
      const { name, age } = await req.json();
      const notify = req.nextUrl.searchParams.get('notify');

      // do something with the data
      console.log(`Updating user ${id}:`, { name, age, notify });
      return {
        success: true,
      } satisfies VovkOutput<typeof UserController.updateUser>;
    },
  });
}
