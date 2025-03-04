import { get, prefix } from 'vovk';
import { openapi } from 'vovk-openapi';

type Token = { message: string };

@prefix('stream')
export default class StreamController {
  @openapi({
    summary: 'Stream tokens',
    description: 'Stream tokens to the client',
  })
  @get('tokens', { cors: true })
  static async *streamTokens() {
    const tokens: Token[] = [
      { message: 'Hello,' },
      { message: ' World' },
      { message: ' from' },
      { message: ' Stream' },
      { message: '!' },
    ];

    for (const token of tokens) {
      yield token;
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  }
}
