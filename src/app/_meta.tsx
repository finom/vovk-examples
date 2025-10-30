import type { MetaRecord } from 'nextra';

const separator = (title: string) => ({ type: 'separator', title });

const meta: MetaRecord = {
  openapi: {
    title: 'OpenAPI',
    type: 'page',
  },
  documentation: {
    title: 'vovk.dev',
    type: 'page',
    href: 'https://vovk.dev/',
  },
  index: 'Home',
  '#common': separator('Common'),
  'basic': 'Basic Controller',
  'basic-with-service': 'Basic Controller with a Service',
  proxy: 'Proxy Endpoint',
  'static-params': 'Static Params',
  'react-query': 'React Query',
  form: 'Form with Files',
  '#validation': separator('Validation'),
  zod: 'Zod',
  dto: 'DTO',
  valibot: 'Valibot',
  arktype: 'Arktype',
  yup: 'Yup',
  'zod-hook-form': { title: 'Zod with React Hook Form', display: 'hidden' }, // TODO https://github.com/react-hook-form/resolvers/issues/791
  '#streaming': separator('JSONLines and AI'),
  jsonlines: 'JSONLines with "yield" Syntax',
  'jsonlines-response': 'JSONLinesResponse Object',
  openai: 'OpenAI Chat',
  'ai-sdk': 'AI SDK Chat',
  '#experimental': separator('Experimental'),
  polling: 'Polling',
  progressive: 'Progressive Response',
};

export default meta;
