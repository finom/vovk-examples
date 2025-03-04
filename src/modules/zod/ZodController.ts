import { prefix, post, HttpStatus } from 'vovk';
import { openapi } from 'vovk-openapi';
import { withZod } from 'vovk-zod';
import { z } from 'zod';

@prefix('zod')
export default class ZodController {
  @openapi.error(HttpStatus.BAD_REQUEST, 'Validation error 11')
  @openapi.error(HttpStatus.INTERNAL_SERVER_ERROR, 'Validation error 22')
  @openapi({
    summary: 'Create a user with Zod',
    description: 'Create a user with Zod for body validation',
  })
  @openapi.error(HttpStatus.BAD_REQUEST, 'Validation error 33')
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
    query: z.object({
      id: z.string().uuid().describe('User ID'),
      yyy: z.number().describe('Number'),
      xxx: z.object({
        yyy: z.string().time().describe('Time'),
      }),
    }),
    output: z
      .object({
        success: z.boolean(),
        user: z
          .object({
            name: z.string().min(2).max(20),
            email: z.string().email(),
            id: z.string().uuid().describe('User ID'),
          })
          .strict(),
      })
      .describe('Response XXX')
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
