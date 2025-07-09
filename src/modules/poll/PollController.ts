import { get, prefix } from 'vovk';
import { withZod } from 'vovk-zod';
import { z } from 'zod/v4';

@prefix('poll')
export default class PollController {
  @get()
  static streamPollResponse = withZod({
    query: z.object({
      i: z.string(),
    }),
    iteration: z.object({
      i: z.number(),
    }),
    async *handle(req) {
      let i = parseInt(req.vovk.query().i);
      let k = 0;
      while (true) {
        yield { i: i++ };
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (++k >= 10) {
          break;
        }
      }
    },
  });
}
