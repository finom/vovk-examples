import { initVovk } from 'vovk';

import OpenAiController from '../../../modules/openai/OpenAiController';
import BasicController from '../../../modules/basic/BasicController';
import BasicControllerWithService from '../../../modules/basic-with-service/BasicControllerWithService';
import StreamController from '../../../modules/stream/StreamController';
import StreamResponseObjectController from '../../../modules/stream-response-object/StreamResponseObjectController';
import WorkerService from '../../../modules/worker/WorkerService';
import WorkerYieldService from '../../../modules/worker-yield/WorkerYieldService';
import FormController from '../../../modules/form/FormController';

export const runtime = 'edge';

const controllers = {
  BasicController,
  BasicControllerWithService,
  StreamController,
  StreamResponseObjectController,
  OpenAiController,
  FormController,
};
const workers = { WorkerService, WorkerYieldService };

export type Controllers = typeof controllers;
export type Workers = typeof workers;

export const { GET, POST, PUT, DELETE } = initVovk({ controllers, workers });
