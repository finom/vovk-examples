import { get, prefix } from 'vovk';
import BasicService from './BasicService';

@prefix('basic-with-service')
export default class BasicControllerWithService {
  @get('greeting', { cors: true })
  static getHello() {
    return BasicService.getHello();
  }
}
