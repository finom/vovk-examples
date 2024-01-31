import { initVovk } from 'vovk';

import OpenAiController from '../../../modules/openai/OpenAiController';
import BasicController from '../../../modules/basic/BasicController';
import HelloController from '../../../modules/hello/HelloController';
import HelloWorkerService from '../../../modules/hello/HelloWorkerService';
import BasicControllerWithService from '../../../modules/basicWithService/BasicControllerWithService';
import StreamController from '../../../modules/stream/StreamController';
import StreamResponseObjectController from '../../../modules/streamResponseObject/StreamResponseObjectController';

export const runtime = 'edge';

const controllers = {
  HelloController,
  BasicController,
  BasicControllerWithService,
  StreamController,
  StreamResponseObjectController,
  OpenAiController,
};
const workers = { HelloWorkerService };

export type Controllers = typeof controllers;
export type Workers = typeof workers;

export const { GET, POST, PUT, DELETE } = initVovk({ controllers, workers });
