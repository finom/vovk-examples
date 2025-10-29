import { prefix, post, operation, type VovkOutput, createStandardValidation } from 'vovk';
import { toJsonSchema } from '@valibot/to-json-schema';
import * as v from 'valibot';

const withValibot = createStandardValidation({
  toJSONSchema: (model) =>
    toJsonSchema(model, {
      overrideSchema(context) {
        if (context.valibotSchema.type === 'file') {
          return { type: 'string', format: 'binary' };
        }
      },
    }),
});

@prefix('users-valibot')
export default class UserValibotController {
  @operation({
    summary: 'Update user (Valibot)',
    description: 'Update user by ID with Valibot validation',
  })
  @post('{id}')
  static updateUser = withValibot({
    body: v.pipe(
      v.object({
        name: v.pipe(v.string(), v.description('User full name')),
        age: v.pipe(v.number(), v.minValue(0), v.maxValue(120), v.description('User age')),
        email: v.pipe(v.string(), v.email(), v.description('User email')),
      }),
      v.description('User object')
    ),
    params: v.object({
      id: v.pipe(v.string(), v.uuid(), v.description('User ID')),
    }),
    query: v.object({
      notify: v.pipe(v.picklist(['email', 'push', 'none']), v.description('Notification type')),
    }),
    output: v.pipe(
      v.object({
        success: v.pipe(v.boolean(), v.description('Success status')),
      }),
      v.description('Response object')
    ),
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
