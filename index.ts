import { WorkerService, StreamController } from './.vovk';
import W from './src/modules/worker/WorkerService'

if (typeof Worker !== 'undefined') {
  // @ts-expect-error
  WorkerService.use(new (W as unknown as typeof Worker)());
}
export { WorkerService, StreamController };
