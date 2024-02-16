export * from './.vovk';
import { WorkerService, WorkerYieldService } from './.vovk';
import WorkerServiceWorker from 'worker-loader!./src/modules/worker/WorkerService.ts';
import WorkerYieldServiceWorker from 'worker-loader!./src/modules/worker-yield/WorkerYieldService.ts';

WorkerService.use(new WorkerServiceWorker());
WorkerYieldService.use(new WorkerYieldServiceWorker());

export { WorkerService, WorkerYieldService };
