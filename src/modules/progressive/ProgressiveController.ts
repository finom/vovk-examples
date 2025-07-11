import { get, JSONLinesResponse, prefix, type VovkIteration } from 'vovk';
import { withZod } from 'vovk-zod';
import { z } from 'zod/v4';
import ProgressiveService from './ProgressiveService';

@prefix('progressive')
export default class ProgressiveController {
  @get()
  static streamProgressiveResponse = withZod({
    validateEachIteration: true,
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
    async handle(req) {
      const response = new JSONLinesResponse<VovkIteration<typeof ProgressiveController.streamProgressiveResponse>>(
        req
      );

      void ProgressiveService.streamProgressiveResponse(response);

      return response;
    },
  });
}
