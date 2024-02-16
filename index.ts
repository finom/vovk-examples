import { WorkerService, StreamController } from './.vovk';

if (typeof Worker !== 'undefined') {
  WorkerService.use(new Worker(new URL('./src/modules/worker/WorkerService.ts', import.meta.url)));
}
export { WorkerService, StreamController };
