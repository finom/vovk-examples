import { prefix, post } from 'vovk';
import { withZod } from 'vovk-zod';
import { z } from 'zod';

@prefix('zod')
export default class ZodController {
  @post('create-user', { cors: true })
  static createUser = withZod(z
    .object({
      name: z.string().min(2).max(20),
      email: z.string().email(),
    })
    .strict(), async (req) => {
    const { name, email } = await req.json();

    return {
      success: true,
      user: { name, email },
    };
  });
}
