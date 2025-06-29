import { generateStaticAPI, initSegment } from 'vovk';
import OpenApiController from '../../../../modules/static/openapi/OpenApiController';

const controllers = {
  OpenApiRPC: OpenApiController,
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
