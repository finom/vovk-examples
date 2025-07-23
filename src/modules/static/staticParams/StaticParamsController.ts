import { z } from 'zod/v4';
import { prefix, get, openapi } from 'vovk';
import { withZod } from 'vovk-zod';

@prefix('static-params')
export default class StaticParamsController {
  @openapi({
    summary: 'Static Params',
    description: 'Get the static params: section and page',
  })
  @get('{section}/page{page}.json', {
    staticParams: [
      { section: 'a', page: '1' },
      { section: 'a', page: '2' },
      { section: 'a', page: '3' },
      { section: 'b', page: '1' },
      { section: 'b', page: '2' },
      { section: 'b', page: '3' },
    ],
  })
  static getStaticParams = withZod({
    params: z.object({
      section: z.enum(['a', 'b']),
      page: z.enum(['1', '2', '3']),
    }),
    handle: async (_req, { section, page }) => {
      return { section, page };
    },
  });
}
