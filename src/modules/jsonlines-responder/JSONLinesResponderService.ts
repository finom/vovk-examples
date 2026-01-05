import type { JSONLinesResponder } from 'vovk';

export type Token = { message: string };

export default class JSONLinesResponderService {
  static async streamTokens(resp: JSONLinesResponder<Token>) {
    const tokens: Token[] = [
      { message: 'Hello,' },
      { message: ' World' },
      { message: ' from' },
      { message: ' JSONLines' },
      { message: ' Endpoint' },
      { message: ' that' },
      { message: ' uses' },
      { message: ' JSONLines' },
      { message: 'Response' },
      { message: ' instance' },
      { message: '!' },
    ];

    for (const token of tokens) {
      resp.send(token);
      await new Promise((resolve) => setTimeout(resolve, 300));
    }

    await resp.close();
  }
}
