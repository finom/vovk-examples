import { headers } from 'next/headers';
import { get, JSONLinesResponse, prefix, VovkIteration } from 'vovk';
import { withZod } from 'vovk-zod';
import { z } from 'zod/v4';
import ProgressiveService from './ProgressiveService';

@prefix('progressive')
export default class ProgressiveController {
  @get()
  static streamProgressiveResponse = withZod({
    // validateEachIteration: true,
    disableServerSideValidation: ['iteration'], // TODO: remove after fixes
    iteration: z.union([
      z.strictObject({
        users: z.array(
          z.strictObject({
            id: z.number(),
            name: z.string(),
          })
        ),
      }),
      z.strictObject({
        tasks: z.array(
          z.strictObject({
            id: z.number(),
            title: z.string(),
            completed: z.boolean(),
          })
        ),
      }),
    ]),
    async handle() {
      const response = new JSONLinesResponse<VovkIteration<typeof ProgressiveController.streamProgressiveResponse>>(
        await headers()
      );

      void ProgressiveService.streamProgressiveResponse(response);

      return response;
    },
  });
}
