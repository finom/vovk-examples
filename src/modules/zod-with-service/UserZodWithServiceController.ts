import { z } from 'zod';
import { endpoint, prefix, post, operation } from 'vovk';
import UserZodService from './UserZodService.ts';

@prefix('users-zod-with-service')
export default class UserZodWithServiceController {
  @operation({
    summary: 'Update user (Zod with service)',
    description: 'Update user by ID with Zod validation',
  })
  @post('{id}')
  static updateUser = endpoint({
    body: z
      .object({
        name: z.string().describe('User full name'),
        age: z.number().min(0).max(120).describe('User age'),
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
        id: z.uuid().describe('User ID'),
      })
      .describe('Response object'),
    async handle(req) {
      const body = await req.vovk.body();
      const query = req.vovk.query();
      const params = req.vovk.params();

      return UserZodService.updateUser(body, query, params);
    },
  });
}
