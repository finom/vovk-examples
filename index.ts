import { WorkerService, StreamController } from './.vovk';
import WorkerServiceWorker from 'worker-loader?inline=fallback!./src/modules/worker/WorkerService';

if (typeof Worker !== 'undefined') {
  WorkerService.use(new (WorkerServiceWorker as unknown as typeof Worker)(''));
}
export { WorkerService, StreamController };
