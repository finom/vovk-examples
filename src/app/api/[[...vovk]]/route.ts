import { initVovk } from 'vovk';

import OpenAiController from '../../../modules/openai/OpenAiController';
import BasicController from '../../../modules/basic/BasicController';
import HelloController from '../../../modules/hello/HelloController';
import HelloWorkerService from '../../../modules/hello/HelloWorkerService';
import BasicControllerWithService from '../../../modules/basic-with-service/BasicControllerWithService';
import StreamController from '../../../modules/stream/StreamController';
import StreamResponseObjectController from '../../../modules/stream-response-object/StreamResponseObjectController';
import WorkerService from '../../../modules/worker/WorkerService';
import WorkerYieldService from '../../../modules/worker-yield/WorkerYieldService';

export const runtime = 'edge';

const controllers = {
  HelloController,
  BasicController,
  BasicControllerWithService,
  StreamController,
  StreamResponseObjectController,
  OpenAiController,
};
const workers = { HelloWorkerService, WorkerService, WorkerYieldService };

export type Controllers = typeof controllers;
export type Workers = typeof workers;

export const { GET, POST, PUT, DELETE } = initVovk({ controllers, workers });
