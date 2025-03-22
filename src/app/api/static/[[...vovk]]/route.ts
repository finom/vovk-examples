import { generateStaticAPI, initVovk } from 'vovk';
import OpenapiController from '../../../../modules/static/openapi/OpenapiController';
import FrozenStreamController from '../../../../modules/static/frozenStream/FrozenStreamController';

const controllers = {
  OpenapiRPC: OpenapiController,
  FrozenStreamRPC: FrozenStreamController,
};

export type Controllers = typeof controllers;

export function generateStaticParams() {
  return generateStaticAPI(controllers);
}

export const { GET, POST, PATCH, PUT, HEAD, OPTIONS, DELETE } = initVovk({
  segmentName: 'static',
  emitSchema: true,
  controllers,
  onError: (error) => {
    console.error(error);
  },
});
