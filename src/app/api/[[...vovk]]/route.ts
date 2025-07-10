import { initSegment } from 'vovk';

import OpenAiController from '../../../modules/openai/OpenAiController';
import HelloWorldController from '../../../modules/hello-world/HelloWorldController';
import BasicControllerWithService from '../../../modules/hello-world-with-service/HelloWorldControllerWithService';
import StreamController from '../../../modules/stream/StreamController';
import StreamResponseObjectController from '../../../modules/stream-response-object/StreamResponseObjectController';
import AiSdkController from '../../../modules/ai-sdk/AiSdkController';
import ProxyController from '../../../modules/proxy/ProxyController';
import UserZodController from '../../../modules/zod/UserZodController';
import UserYupController from '../../../modules/yup/UserYupController';
import UserDtoController from '../../../modules/dto/UserDtoController';
import ProgressiveController from '../../../modules/progressive/ProgressiveController';
import PollController from '../../../modules/poll/PollController';
import UserArktypeController from '../../../modules/arktype/UserArktypeController';
import UserValibotController from '../../../modules/valibot/UserValibotController';

export const runtime = 'edge';

export const maxDuration = 60;

const controllers = {
  HelloWorldRPC: HelloWorldController,
  BasicRPCWithService: BasicControllerWithService,
  StreamRPC: StreamController,
  StreamResponseObjectRPC: StreamResponseObjectController,
  OpenAiRPC: OpenAiController,
  AiSdkRPC: AiSdkController,
  ProxyRPC: ProxyController,
  UserZodRPC: UserZodController,
  UserYupRPC: UserYupController,
  UserDtoRPC: UserDtoController,
  UserArktypeRPC: UserArktypeController,
  UserValibotRPC: UserValibotController,
  ProgressiveRPC: ProgressiveController,
  PollRPC: PollController,
};

export type Controllers = typeof controllers;

export const { GET, POST, PUT, DELETE } = initSegment({
  controllers,
  onError: (error) => {
    console.error('Segment error: ', error);
  },
});
