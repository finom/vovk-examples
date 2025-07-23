import { generateStaticAPI, initSegment } from 'vovk';
import OpenApiController from '../../../../modules/static/openapi/OpenApiController';
import StaticParamsController from '../../../../modules/static/staticParams/StaticParamsController';

const controllers = {
  OpenApiRPC: OpenApiController,
  StaticParamsRPC: StaticParamsController,
};

export type Controllers = typeof controllers;

export function generateStaticParams() {
  return generateStaticAPI(controllers);
}

export const { GET } = initSegment({
  segmentName: 'static',
  emitSchema: true,
  controllers,
  onError: (error) => {
    console.error(error);
  },
});
