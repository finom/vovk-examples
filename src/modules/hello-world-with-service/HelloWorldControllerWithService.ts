import { get, prefix, openapi } from 'vovk';
import HelloWorldService from './HelloWorldService.ts';

@prefix('hello-world-with-service')
export default class HelloWorldControllerWithService {
  @openapi({
    summary: 'Get a greeting using a service',
    description: 'Get a greeting from the server using a service',
  })
  @get('greeting')
  static getHello() {
    return HelloWorldService.getHello();
  }
}
