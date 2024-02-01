import { prefix, post, VovkRequest } from 'vovk';
import vovkZod from 'vovk-zod';
import { z } from 'zod';
import { userSchema } from '../../zod';

@prefix('form')
export default class FormController {
  @post('create-user')
  @vovkZod(userSchema)
  static async createUser(req: VovkRequest<z.infer<typeof userSchema>>) {
    const { firstName, lastName, email } = await req.json();

    return {
      success: true,
      user: { firstName, lastName, email },
    };
  }
}
