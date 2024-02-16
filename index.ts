import { WorkerService, StreamController } from './.vovk';
import WorkerServiceWorker from './src/modules/worker/WorkerService'

if (typeof Worker !== 'undefined') {
  // @ts-expect-error
  WorkerService.use(new (WorkerServiceWorker as typeof Worker)());
}
export { WorkerService, StreamController };
