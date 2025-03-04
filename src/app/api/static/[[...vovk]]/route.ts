import { generateStaticAPI, initVovk } from 'vovk';
import OpenapiController from '../../../../modules/static/openapi/OpenapiController';

const controllers = {
  OpenapiRPC: OpenapiController,
};

export type Controllers = typeof controllers;

export function generateStaticParams() {
  return generateStaticAPI(controllers);
}

export const { GET, POST, PATCH, PUT, HEAD, OPTIONS, DELETE } = initVovk({
  segmentName: 'static',
  emitSchema: true,
  controllers,
});
