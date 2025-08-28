import { prefix, get, operation, JSONLinesResponse } from 'vovk';
import StreamService, { type Token } from './JSONLinesService.ts';

@prefix('jsonlines-response-object')
export default class JSONLinesResponseController {
  @operation({
    summary: 'Stream tokens using Response object',
    description: 'Stream tokens to the client using Response object',
  })
  @get('tokens', { cors: true }) // CORS for OPTIONS
  static async streamTokens(req: Request) {
    const response = new JSONLinesResponse<Token>(req, {
      headers: {
        // CORS for GET
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Authorization',
      },
    });

    void StreamService.streamTokens(response);

    return response;
  }
}
