import { prefix, get, operation, JSONLinesResponder, procedure, VovkIteration } from 'vovk';
import JSONLinesResponderService from './JSONLinesResponderService.ts';
import z from 'zod';

@prefix('jsonlines-responder')
export default class JSONLinesResponderController {
  @operation({
    summary: 'Stream tokens using Response object',
    description: 'Stream tokens to the client using Response object',
  })
  @get('tokens', { cors: true })
  static streamTokens = procedure({
    iteration: z.object({ message: z.string() }),
  }).handle(async function* () {
    const responder = new JSONLinesResponder<VovkIteration<typeof JSONLinesResponderController.streamTokens>>();

    void JSONLinesResponderService.streamTokens(responder);

    return responder;
  })
}
