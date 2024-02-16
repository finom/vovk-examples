export * from './.vovk';
import { WorkerService, WorkerYieldService } from './.vovk';
import WorkerServiceWorker from 'worker-loader!./src/modules/worker/WorkerService.ts';

WorkerService.use(new WorkerServiceWorker());

export { WorkerService, WorkerYieldService };
