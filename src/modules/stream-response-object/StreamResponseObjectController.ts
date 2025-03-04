import { prefix, get, StreamJSONResponse } from 'vovk';
import { openapi } from 'vovk-openapi';
import StreamService, { type Token } from './StreamService';

@prefix('stream-with-object')
export default class StreamResponseObjectController {
  @openapi({
    summary: 'Stream tokens using Response object',
    description: 'Stream tokens to the client using Response object',
  })
  @get('tokens')
  static async streamTokens() {
    // define CORS headers for vovk.dev manually when returning Response instance
    const response = new StreamJSONResponse<Token>({
      headers: {
        ...StreamJSONResponse.defaultHeaders,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });

    void StreamService.streamTokens(response);

    return response;
  }
}
