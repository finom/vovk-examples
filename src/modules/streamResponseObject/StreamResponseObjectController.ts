import { prefix, get, type VovkRequest, StreamResponse } from 'vovk';
import StreamService, { type Token } from './StreamService';

@prefix('stream-with-object')
export default class StreamResponseObjectController {
  private static streamService = StreamService;

  @get('tokens', { cors: true })
  static async streamTokens() {
    const response = new StreamResponse<Token>();

    void this.streamService.streamTokens(response);

    return response;
  }
}
