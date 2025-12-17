import { endpoint, prefix, post, operation, type VovkOutput } from 'vovk';
import { toStandardJsonSchema } from '@valibot/to-json-schema';
import * as v from 'valibot';

@prefix('users-valibot')
export default class UserValibotController {
  @operation({
    summary: 'Update user (Valibot)',
    description: 'Update user by ID with Valibot validation',
  })
  @post('{id}')
  static updateUser = endpoint({
    body: toStandardJsonSchema(v.pipe(
      v.object({
        name: v.pipe(v.string(), v.description('User full name')),
        age: v.pipe(v.number(), v.minValue(0), v.maxValue(120), v.description('User age')),
        email: v.pipe(v.string(), v.email(), v.description('User email')),
      }),
      v.description('User object')
    )),
    params: toStandardJsonSchema(v.object({
      id: v.pipe(v.string(), v.uuid(), v.description('User ID')),
    })),
    query: toStandardJsonSchema(v.object({
      notify: v.pipe(v.picklist(['email', 'push', 'none']), v.description('Notification type')),
    })),
    output: toStandardJsonSchema(v.pipe(
      v.object({
        success: v.pipe(v.boolean(), v.description('Success status')),
      }),
      v.description('Response object')
    )),
    async handle(req, { id }) {
      const { name, age } = await req.json();
      const notify = req.nextUrl.searchParams.get('notify');

      // do something with the data
      console.log(`Updating user ${id}:`, { name, age, notify });
      return {
        success: true,
      } satisfies VovkOutput<typeof UserValibotController.updateUser>;
    },
  });
}
