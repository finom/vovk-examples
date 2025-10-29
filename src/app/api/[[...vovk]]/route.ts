import { initSegment } from 'vovk';

import OpenAiController from '../../../modules/openai/OpenAiController.ts';
import BasicController from '../../../modules/basic/BasicController.ts';
import BasicControllerWithService from '../../../modules/basic-with-service/BasicControllerWithService.ts';
import JSONLinesController from '../../../modules/jsonlines/JSONLinesController.ts';
import JSONLinesResponseController from '../../../modules/jsonlines-response/JSONLinesResponseController.ts';
import AiSdkController from '../../../modules/ai-sdk/AiSdkController.ts';
import ProxyController from '../../../modules/proxy/ProxyController.ts';
import UserZodController from '../../../modules/zod/UserZodController.ts';
import UserYupController from '../../../modules/yup/UserYupController.ts';
import UserDtoController from '../../../modules/dto/UserDtoController.ts';
import PollController from '../../../modules/poll/PollController.ts';
import UserArktypeController from '../../../modules/arktype/UserArktypeController.ts';
import UserValibotController from '../../../modules/valibot/UserValibotController.ts';
import ProgressiveController from '../../../modules/progressive/ProgressiveController.ts';
import UserZodWithServiceController from '../../../modules/zod-with-service/UserZodWithServiceController.ts';
import FormZodController from '../../../modules/form/FormZodController.ts';
// import UserZod3Controller from '../../../modules/zod3/UserZod3Controller.ts';

// export const runtime = 'edge.ts';

export const maxDuration = 60;

const controllers = {
  UserZodRPC: UserZodController,
  UserZodWithServiceRPC: UserZodWithServiceController,
  // UserZod3RPC: UserZod3Controller, uncomment when https://github.com/StefanTerdell/zod-to-json-schema/issues/178 is resolved
  UserYupRPC: UserYupController,
  UserDtoRPC: UserDtoController,
  UserArktypeRPC: UserArktypeController,
  UserValibotRPC: UserValibotController,
  BasicRPC: BasicController,
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
