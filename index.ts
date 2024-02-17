import { WorkerService, WorkerYieldService, StreamController } from './.vovk';
import WorkerServiceText from './src/modules/worker/WorkerService';

// Create a blob from the worker string
const workerBlob = new Blob([WorkerServiceText as unknown as string], { type: 'application/javascript' });

// Create a URL for the blob
const workerUrl = URL.createObjectURL(workerBlob);

// Instantiate the worker with the blob URL
const worker = new Worker(workerUrl);

/* import WorkerServiceWorker from 'worker-loader?inline=fallback!./src/modules/worker/WorkerService';
import WorkerYieldServiceWorker from 'worker-loader?inline=fallback!./src/modules/worker-yield/WorkerYieldService';

if (typeof Worker !== 'undefined') {
  WorkerService.use(new (WorkerServiceWorker as unknown as typeof Worker)(''));
  WorkerYieldService.use(new (WorkerYieldServiceWorker as unknown as typeof Worker)(''));
} */

WorkerService.use(worker);
// WorkerYieldService.use(new Worker(new URL('./relative/path/to/my/worker.js?inline', import.meta.url)));

export { WorkerService, StreamController };
