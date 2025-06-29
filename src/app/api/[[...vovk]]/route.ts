import { initSegment } from 'vovk';

import OpenAiController from '../../../modules/openai/OpenAiController';
import HelloWorldController from '../../../modules/hello-world/HelloWorldController';
import BasicControllerWithService from '../../../modules/hello-world-with-service/HelloWorldControllerWithService';
import StreamController from '../../../modules/stream/StreamController';
import StreamResponseObjectController from '../../../modules/stream-response-object/StreamResponseObjectController';
import ZodController from '../../../modules/zod/ZodController';
import AiSdkController from '@/modules/ai-sdk/AiSdkController';
import DtoController from '@/modules/dto/DtoController';
import YupController from '@/modules/yup/YupController';
import ProxyController from '@/modules/proxy/ProxyController';
import UserZodController from '../../../modules/showcase/UserZodController';
import UserYupController from '../../../modules/showcase/UserYupController';
import UserDtoController from '../../../modules/showcase/UserDtoController';
import ProgressiveController from '../../../modules/progressive/ProgressiveController';

export const runtime = 'edge';

const controllers = {
  HelloWorldRPC: HelloWorldController,
  BasicRPCWithService: BasicControllerWithService,
  StreamRPC: StreamController,
  StreamResponseObjectRPC: StreamResponseObjectController,
  OpenAiRPC: OpenAiController,
  ZodRPC: ZodController,
  YupRPC: YupController,
  DtoRPC: DtoController,
  AiSdkRPC: AiSdkController,
  ProxyRPC: ProxyController,
  UserRPC: UserZodController,
  UserYupRPC: UserYupController,
  UserDtoRPC: UserDtoController,
  ProgressiveRPC: ProgressiveController,
};

export type Controllers = typeof controllers;

export const { GET, POST, PUT, DELETE } = initSegment({
  controllers,
  onError: (error) => {
    console.error(error);
  },
});
