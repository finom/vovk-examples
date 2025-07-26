import { z } from 'zod/v3';
import { prefix, post, openapi, type VovkOutput } from 'vovk';
import { withZod } from 'vovk-zod/v3';

@prefix('users-zod3')
export default class UserZod3Controller {
  @openapi({
    summary: 'Update user (Zod 3)',
    description: 'Update user by ID with Zod 3 validation',
  })
  @post('{id}')
  static updateUser = withZod({
    body: z
      .object({
        name: z.string().describe('User full name'),
        age: z.number().min(0).max(120).describe('User age'),
        email: z.string().email().describe('User email'),
      })
      .describe('User object'),
    params: z.object({
      id: z.string().uuid().describe('User ID'),
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
      } satisfies VovkOutput<typeof UserZod3Controller.updateUser>;
    },
  });
}
