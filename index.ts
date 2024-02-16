export * from './.vovk';
import { WorkerService, WorkerYieldService } from './.vovk';

if (typeof Worker !== 'undefined') {
  WorkerService.use(new Worker(new URL('./src/modules/worker/WorkerService.ts', import.meta.url)));
  WorkerYieldService.use(new Worker(new URL('./src/modules/worker-yield/WorkerYieldService.ts', import.meta.url)));
}
export { WorkerService };
