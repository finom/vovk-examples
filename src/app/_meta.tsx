import type { MetaRecord } from 'nextra';

const separator = (title: string) => ({ type: 'separator', title });

const meta: MetaRecord = {
  scalar: {
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
  'hello-world': 'Hello World',
  'hello-world-with-service': 'Hello World with a Service',
  proxy: 'Proxy',
  'react-query': 'React Query',
  '#validation': separator('Validation'),
  zod: 'Zod',
  dto: 'DTO',
  valibot: 'Valibot',
  arktype: 'Arktype',
  yup: 'Yup',
  'zod-hook-form': { title: 'Zod with React Hook Form', display: 'hidden' }, // TODO https://github.com/react-hook-form/resolvers/issues/791
  '#streaming': separator('JSONLines and AI'),
  stream: 'JSONLines',
  openai: 'OpenAI chat',
  'stream-response-object': 'JSONLines Response Object',
  'ai-sdk': 'AI SDK',
  '#experimental': separator('Experimental'),
  poll: 'Polling',
  progressive: 'Progressive response',
};

export default meta;
