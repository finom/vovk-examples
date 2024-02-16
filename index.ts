import { WorkerService, StreamController } from './.vovk';
import WorkerServiceWorker from 'worker-loader!./src/modules/worker/WorkerService';
console.log(WorkerService, WorkerServiceWorker);
// @ts-ignore
WorkerService.use(new (WorkerServiceWorker as unknown as typeof Worker)());

export { WorkerService, StreamController };
