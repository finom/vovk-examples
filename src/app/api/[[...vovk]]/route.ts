import { initVovk } from 'vovk';

import OpenAiController from '../../../modules/openai/OpenAiController';
import BasicController from '../../../modules/basic/BasicController';
import BasicControllerWithService from '../../../modules/basic-with-service/BasicControllerWithService';
import StreamController from '../../../modules/stream/StreamController';
import StreamResponseObjectController from '../../../modules/stream-response-object/StreamResponseObjectController';
import HelloWorker from '../../../modules/worker/HelloWorker';
import HelloWorkerYield from '../../../modules/worker-yield/HelloWorkerYield';
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
const workers = { HelloWorker, HelloWorkerYield };

export type Controllers = typeof controllers;
export type Workers = typeof workers;

export const { GET, POST, PUT, DELETE } = initVovk({ controllers, workers });
