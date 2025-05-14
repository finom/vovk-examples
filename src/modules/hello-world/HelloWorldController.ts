import { get, post, prefix, VovkRequest } from 'vovk';
import { openapi } from 'vovk-openapi';

@prefix('hello-world')
export default class HelloWorldController {
  @openapi({
    summary: 'Get a greeting',
    description: 'Get a greeting from the server',
  })
  @get('greeting')
  static getHello() {
    return { greeting: 'Hello world!' };
  }

  @openapi({
    summary: 'Post a greeting',
    description: 'Post a greeting to the server',
  })
  @post('greeting')
  static async postHello(req: VovkRequest<{ greeting: string }>) {
    const { greeting } = await req.json();
    return { greeting };
  }
}
