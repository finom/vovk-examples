import { get, prefix } from 'vovk';
import { openapi } from 'vovk-openapi';

@prefix('proxy')
export default class ProxyController {
  @openapi({
    summary: 'Proxy endpoint',
    description: 'Get a greeting from vovk.dev',
  })
  @get('greeting', { cors: true })
  static getHello() {
    return fetch('https://vovk.dev/api/hello/greeting.json') as unknown as { greeting: 'Hello world!' };
  }
}
