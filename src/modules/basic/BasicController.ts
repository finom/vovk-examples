import { get, prefix } from 'vovk';

@prefix('basic')
export default class BasicController {
  @get('greeting', { cors: true })
  static getHello() {
    return { greeting: 'Hello world!' };
  }
}
