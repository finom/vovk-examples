import type { MetaRecord } from 'nextra';

/**
 * type MetaRecordValue =
 *  | TitleSchema
 *  | PageItemSchema
 *  | SeparatorSchema
 *  | MenuSchema
 *
 * type MetaRecord = Record<string, MetaRecordValue>
 **/
const meta: MetaRecord = {
  index: 'Home',
  'hello-world': 'Hello World',
  'hello-world-with-service': 'Hello World with a Service',
  openai: 'OpenAI chat',
  proxy: 'Proxy',
  'react-query': 'React Query',
  'server-component': 'Server Component',
  dto: 'DTO',
  stream: 'Stream',
  scalar: {
    title: 'Scalar',
    type: 'page',
  },
  'stream-response-object': 'Stream Response Object',
  yup: 'Yup',
  zod: 'Zod',
  'zod-hook-form': 'Zod with React Hook Form',
  showcase: 'Showcase',
  'ai-sdk': 'AI SDK',
};

export default meta;
