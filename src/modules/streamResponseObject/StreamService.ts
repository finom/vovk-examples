import { StreamResponse } from 'vovk';

export type Token = { message: string };

export default class StreamService {
  static async streamTokens(resp: StreamResponse<Token>) {
    const tokens: Token[] = [
      { message: 'Hello,' },
      { message: ' World' },
      { message: ' from' },
      { message: ' Stream' },
      { message: '!' },
    ];

    for (const token of tokens) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      resp.send(token);
    }
  }
}
