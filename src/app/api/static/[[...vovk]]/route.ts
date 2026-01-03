import { controllersToStaticParams, initSegment } from 'vovk';
import OpenApiController from '../../../../modules/static/openapi/OpenApiController.ts';
import StaticParamsController from '../../../../modules/static/staticParams/StaticParamsController.ts';

const controllers = {
  OpenApiRPC: OpenApiController,
  StaticParamsRPC: StaticParamsController,
};

export type Controllers = typeof controllers;

export function generateStaticParams() {
  return controllersToStaticParams(controllers);
}

export const { GET } = initSegment({
  segmentName: 'static',
  emitSchema: true,
  controllers,
  onError: (error) => {
    console.error(error);
  },
});
