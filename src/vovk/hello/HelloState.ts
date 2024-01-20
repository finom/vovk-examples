import { clientizeController } from "vovk/client";
import { promisifyWorker } from "vovk/worker";
import type HelloController from "./HelloController";
import type HelloWorkerService from "./HelloWorkerService";
import metadata from "../metadata";

const controller = clientizeController<typeof HelloController>(metadata.HelloController);

const worker = typeof Worker === 'undefined' ? null : promisifyWorker<typeof HelloWorkerService>(
    new Worker(new URL('./HelloWorkerService.ts', import.meta.url)), 
    metadata.workers.HelloWorkerService
);

export async function *calculatePi() {
    yield* worker?.calculatePi(100_000_000_000, 10_000_000) ?? [];
}

export function getHello() {
    return controller.getHello();
}

export async function *getStreamingHello() {
    yield* await controller.getStreamingHello({ isStream: true })
}