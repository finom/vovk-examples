import { get, post, prefix, VovkRequest } from 'vovk';

@prefix('basic')
export default class BasicController {
  @get('greeting')
  static getHello() {
    return { greeting: 'Hello world!' };
  }

  @post('greeting')
  static async postHello(req: VovkRequest<{ greeting: string }>) {
    const { greeting } = await req.json();
    return { greeting };
  }

  @get('stream')
  static async *streamTokens() {
    const tokens = [{ message: 'Hello' }, { message: 'world' }, { message: '!' }];
    for (const token of tokens) {
      yield token;
    }
  }
}
