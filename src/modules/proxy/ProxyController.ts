import { get, prefix } from 'vovk';

@prefix('proxy')
export default class ProxyController {
  /**
   * Return a greeting
   */
  @get('greeting', { cors: true })
  static getHello() {
    return fetch('https://vovk.dev/api/hello/greeting.json') as unknown as { greeting: 'Hello world!' };
  }
}
