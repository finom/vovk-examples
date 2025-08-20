import { initSegment } from 'vovk';

import OpenAiController from '../../../modules/openai/OpenAiController';
import HelloWorldController from '../../../modules/hello-world/HelloWorldController';
import BasicControllerWithService from '../../../modules/hello-world-with-service/HelloWorldControllerWithService';
import JSONLinesController from '../../../modules/jsonlines/JSONLinesController';
import JSONLinesResponseController from '../../../modules/jsonlines-response/JSONLinesResponseController';
import AiSdkController from '../../../modules/ai-sdk/AiSdkController';
import ProxyController from '../../../modules/proxy/ProxyController';
import UserZodController from '../../../modules/zod/UserZodController';
import UserYupController from '../../../modules/yup/UserYupController';
import UserDtoController from '../../../modules/dto/UserDtoController';
import PollController from '../../../modules/poll/PollController';
import UserArktypeController from '../../../modules/arktype/UserArktypeController';
import UserValibotController from '../../../modules/valibot/UserValibotController';
import ProgressiveController from '../../../modules/progressive/ProgressiveController';
import UserZodWithServiceController from '../../../modules/zod-with-service/UserZodWithServiceController';
import FormZodController from '../../../modules/form/FormZodController';
// import UserZod3Controller from '../../../modules/zod3/UserZod3Controller';

// export const runtime = 'edge';

export const maxDuration = 60;

const controllers = {
  UserZodRPC: UserZodController,
  UserZodWithServiceRPC: UserZodWithServiceController,
  // UserZod3RPC: UserZod3Controller, uncomment when https://github.com/StefanTerdell/zod-to-json-schema/issues/178 is resolved
  UserYupRPC: UserYupController,
  UserDtoRPC: UserDtoController,
  UserArktypeRPC: UserArktypeController,
  UserValibotRPC: UserValibotController,
  HelloWorldRPC: HelloWorldController,
  BasicRPCWithService: BasicControllerWithService,
  JSONLinesRPC: JSONLinesController,
  JSONLinesResponseRPC: JSONLinesResponseController,
  OpenAiRPC: OpenAiController,
  AiSdkRPC: AiSdkController,
  ProxyRPC: ProxyController,
  PollRPC: PollController,
  ProgressiveRPC: ProgressiveController,
  FormZodRPC: FormZodController,
};

export type Controllers = typeof controllers;

export const { GET, POST, PUT, DELETE, HEAD, OPTIONS } = initSegment({
  controllers,
  onError: (error) => {
    console.error('Segment error: ', error);
  },
});
