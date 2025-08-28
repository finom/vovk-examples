import { get, prefix, operation } from 'vovk';
import HelloWorldService from './HelloWorldService.ts';

@prefix('hello-world-with-service')
export default class HelloWorldControllerWithService {
  @operation({
    summary: 'Get a greeting using a service',
    description: 'Get a greeting from the server using a service',
  })
  @get('greeting')
  static getHello() {
    return HelloWorldService.getHello();
  }
}
