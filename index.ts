export * from './.vovk';
import { WorkerService } from './.vovk';

WorkerService.use(new Worker(new URL('vovk-examples/dist/WorkerService.js', import.meta.url)));

export { WorkerService };
