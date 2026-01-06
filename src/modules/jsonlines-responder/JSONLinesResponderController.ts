import { prefix, get, operation, JSONLinesResponder } from 'vovk';
import JSONLinesResponderService, { type Token } from './JSONLinesResponderService.ts';

@prefix('jsonlines-responder')
export default class JSONLinesResponderController {
  @operation({
    summary: 'Stream tokens using Response object',
    description: 'Stream tokens to the client using Response object',
  })
  @get('tokens', { cors: true })
  static async streamTokens(req: Request) {
    const responder = new JSONLinesResponder<Token>(req);

    void JSONLinesResponderService.streamTokens(responder);

    return responder;
  }
}
