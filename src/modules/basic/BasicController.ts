import { get, prefix } from 'vovk';

@prefix('basic')
export default class BasicController {
  /**
   * Return a greeting
   */
  @get('greeting', { cors: true })
  static getHello() {
    return { greeting: 'Hello world!' };
  }
}
