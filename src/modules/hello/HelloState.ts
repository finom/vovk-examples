import { HelloWorkerService, HelloController } from 'vovk-client';

const WorkerService =
  typeof Worker === 'undefined'
    ? null
    : HelloWorkerService.use(new Worker(new URL('./HelloWorkerService.ts', import.meta.url)));

export async function* calculatePi() {
  yield* WorkerService?.calculatePi(100_000_000_000, 10_000_000) ?? [];
}

export function getHello() {
  return HelloController.getHello();
}

export async function* getStreamingHello() {
  yield* await HelloController.getStreamingHello();
}
