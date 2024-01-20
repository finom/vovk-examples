import HelloController from '../../../modules/hello/HelloController';
import HelloWorkerService from '../../../modules/hello/HelloWorkerService';
import { initVovk } from 'vovk';

export const runtime = 'edge';

const controllers = { HelloController };
const workers = { HelloWorkerService };

export type Controllers = typeof controllers;
export type Workers = typeof workers;

export const { GET, POST, PUT, DELETE } = initVovk({ controllers, workers });
