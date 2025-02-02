import { initVovk } from 'vovk';

import OpenAiController from '../../../modules/openai/OpenAiController';
import BasicController from '../../../modules/basic/BasicController';
import BasicControllerWithService from '../../../modules/basic-with-service/BasicControllerWithService';
import StreamController from '../../../modules/stream/StreamController';
import StreamResponseObjectController from '../../../modules/stream-response-object/StreamResponseObjectController';
import ZodController from '../../../modules/zod/ZodController';
import AiSdkController from '@/modules/ai-sdk/AiSdkController';
import DtoController from '@/modules/dto/DtoController';
import YupController from '@/modules/yup/YupController';
import ProxyController from '@/modules/proxy/ProxyController';

export const runtime = 'edge';

const controllers = {
  BasicRPC: BasicController,
  BasicRPCWithService: BasicControllerWithService,
  StreamRPC: StreamController,
  StreamResponseObjectRPC: StreamResponseObjectController,
  OpenAiRPC: OpenAiController,
  ZodRPC: ZodController,
  YupRPC: YupController,
  DtoRPC: DtoController,
  AiSdkRPC: AiSdkController,
  ProxyRPC: ProxyController,
};

export type Controllers = typeof controllers;

export const { GET, POST, PUT, DELETE } = initVovk({ controllers });
