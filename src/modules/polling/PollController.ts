import { endpoint, get, prefix } from 'vovk';
import { z } from 'zod';

@prefix('polling')
export default class PollController {
  @get('', { cors: true })
  static streamPollResponse = endpoint({
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
