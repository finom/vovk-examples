import { get, prefix } from 'vovk';
import BasicService from './BasicService';

@prefix('basic-with-service')
export default class BasicControllerWithService {
  private static basicService = BasicService;

  @get('greeting', { cors: true })
  static getHello() {
    return this.basicService.getHello();
  }
}
