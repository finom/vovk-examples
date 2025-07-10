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
  '#experimental': separator('Experimental'),
  poll: 'Poll',
  progressive: 'Progressive',
  '#validation': separator('Validation'),
  zod: 'Zod',
  dto: 'DTO',
  valibot: 'Valibot',
  arktype: 'Arktype',
  yup: 'Yup',
  'zod-hook-form': 'Zod with React Hook Form',
  '#streaming': separator('JSONLines and AI'),
  stream: 'JSONLines',
  openai: 'OpenAI chat',
  'stream-response-object': 'JSONLines Response Object',
  'ai-sdk': 'AI SDK',
};

export default meta;
