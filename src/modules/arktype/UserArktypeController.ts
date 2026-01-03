import { type } from 'arktype';
import { procedure, prefix, post, operation, type VovkOutput } from 'vovk';

@prefix('users-arktype')
export default class UserArktypeController {
  @operation({
    summary: 'Update user (Arktype)',
    description: 'Update user by ID with Arktype validation',
  })
  @post('{id}')
  static updateUser = procedure({
    body: type({
      name: type('string').describe('User full name'),
      age: type('0 < number < 120').describe('User age'),
      email: type('string.email').describe('User email'),
      // file: type('File').describe('User file'),
    }),
    params: type({
      id: type('string.uuid').describe('User ID'),
    }),
    query: type({
      notify: type('"email" | "push" | "none"').describe('Notification type'),
    }),
    output: type({
      success: type('boolean').describe('Success status'),
    }),
    async handle(req, { id }) {
      const { name, age } = await req.json();
      const notify = req.nextUrl.searchParams.get('notify');

      // do something with the data
      console.log(`Updating user ${id}:`, { name, age, notify });
      return {
        success: true,
      } satisfies VovkOutput<typeof UserArktypeController.updateUser>;
    },
  });
}
