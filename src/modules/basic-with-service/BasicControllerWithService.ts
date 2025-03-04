import { get, prefix } from 'vovk';
import { openapi } from 'vovk-openapi';
import BasicService from './BasicService';

@prefix('basic-with-service')
export default class BasicControllerWithService {
  @openapi({
    summary: 'Get a greeting using a service',
    description: 'Get a greeting from the server using a service',
  })
  @get('greeting')
  static getHello() {
    return BasicService.getHello();
  }
}
