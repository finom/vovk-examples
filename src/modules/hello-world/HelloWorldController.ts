import { get, post, prefix, operation, type VovkRequest } from 'vovk';

@prefix('hello-world')
export default class HelloWorldController {
  @operation({
    summary: 'Get a greeting',
    description: 'Get a greeting from the server',
  })
  @get('greeting')
  static getHello() {
    return { greeting: 'Hello world!' };
  }

  @operation({
    summary: 'Post a greeting',
    description: 'Post a greeting to the server',
  })
  @post('greeting')
  static async postHello(req: VovkRequest<{ greeting: string }>) {
    const { greeting } = await req.json();
    return { greeting };
  }
}
