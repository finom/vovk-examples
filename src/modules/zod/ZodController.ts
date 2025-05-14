import { prefix, post, HttpStatus } from 'vovk';
import { openapi } from 'vovk-openapi';
import { withZod } from 'vovk-zod';
import { z } from 'zod';

@prefix('zod')
export default class ZodController {
  @openapi({
    summary: 'Create a user with Zod',
    description: 'Create a user with Zod for body validation',
  })
  @post('update-user/:id')
  static updateUser = withZod({
    params: z.object({
      id: z.string().uuid().describe('User ID'),
    }),
    body: z
      .object({
        name: z.string().min(2).max(20),
        email: z.string().email(),
      })
      .strict(),
    async handle(req) {
      const { name, email } = await req.json();

      return {
        success: true,
        user: { name, email, id: '2' },
      };
    },
  });
}
