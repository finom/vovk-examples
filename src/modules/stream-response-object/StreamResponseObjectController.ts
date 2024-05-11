import { prefix, get, StreamResponse } from 'vovk';
import StreamService, { type Token } from './StreamService';

@prefix('stream-with-object')
export default class StreamResponseObjectController {
  @get('tokens')
  static async streamTokens() {
    // need to define CORS headers manually when returning Response instance
    const response = new StreamResponse<Token>({
      headers: {
        ...StreamResponse.defaultHeaders,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });

    void StreamService.streamTokens(response);

    return response;
  }
}
