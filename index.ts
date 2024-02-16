export * from './.vovk';
import { WorkerService, WorkerYieldService } from './.vovk';
import WorkerServiceWorker from './src/modules/worker/WorkerService';

// @ts-ignore
WorkerService.use(new (WorkerServiceWorker as unknown as typeof Worker)());

export { WorkerService, WorkerYieldService };
