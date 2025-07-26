import type { JSONLinesResponse } from 'vovk';

export type Token = { message: string };

export default class JSONLinesService {
  static async streamTokens(resp: JSONLinesResponse<Token>) {
    const tokens: Token[] = [
      { message: 'Hello,' },
      { message: ' World' },
      { message: ' from' },
      { message: ' Stream' },
      { message: '!' },
    ];

    for (const token of tokens) {
      resp.send(token);
      await new Promise((resolve) => setTimeout(resolve, 300));
    }

    await resp.close();
  }
}
