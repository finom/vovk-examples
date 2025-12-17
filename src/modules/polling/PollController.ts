import { get, prefix } from 'vovk';
import { withZod } from '../../lib/withZod.ts';
import { z } from 'zod';

@prefix('polling')
export default class PollController {
  @get('', { cors: true })
  static streamPollResponse = withZod({
    query: z.object({
      i: z.string(),
    }),
    iteration: z.object({
      i: z.number(),
    }),
    async *handle(req) {
      let i = parseInt(req.vovk.query().i);
      while (true) {
        yield { i: ++i };
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (!(i % 10)) {
          break;
        }
      }
    },
  });
}
