import { WorkerService, WorkerYieldService, StreamController } from './.vovk';

/* import WorkerServiceWorker from 'worker-loader?inline=fallback!./src/modules/worker/WorkerService';
import WorkerYieldServiceWorker from 'worker-loader?inline=fallback!./src/modules/worker-yield/WorkerYieldService';

if (typeof Worker !== 'undefined') {
  WorkerService.use(new (WorkerServiceWorker as unknown as typeof Worker)(''));
  WorkerYieldService.use(new (WorkerYieldServiceWorker as unknown as typeof Worker)(''));
} */
if (typeof Worker !== 'undefined') {
  import('./src/modules/worker/WorkerService');
  WorkerService.use(new Worker(new URL('./src/modules/worker/WorkerService.ts', import.meta.url)));
}
// WorkerYieldService.use(new Worker(new URL('./relative/path/to/my/worker.js?inline', import.meta.url)));

export { WorkerService, StreamController };
