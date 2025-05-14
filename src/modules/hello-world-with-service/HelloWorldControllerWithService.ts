import { get, prefix } from 'vovk';
import { openapi } from 'vovk-openapi';
import HelloWorldService from './HelloWorldService';

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
