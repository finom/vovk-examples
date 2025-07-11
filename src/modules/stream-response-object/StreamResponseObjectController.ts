import { prefix, get, openapi, JSONLinesResponse } from 'vovk';
import StreamService, { type Token } from './StreamService';

@prefix('stream-with-object')
export default class StreamResponseObjectController {
  @openapi({
    summary: 'Stream tokens using Response object',
    description: 'Stream tokens to the client using Response object',
  })
  @get('tokens')
  static async streamTokens(req: Request) {
    const response = new JSONLinesResponse<Token>(req, {
      headers: {
        // CORS
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Authorization',
      },
    });

    void StreamService.streamTokens(response);

    return response;
  }
}
