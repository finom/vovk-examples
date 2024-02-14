import Github from '@/components/Github';
import OpenAiExample from './OpenAiExample';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';

export const metadata: PageMetadata = {
  title: 'Vovk.ts - OpenAI Chat Example',
  description: 'Real use-case of response streaming and async generators with OpenAI API.',
};

export default function BasicControllerPage() {
  return (
    <>
      <Example title={metadata.title} description={metadata.description}>
        <OpenAiExample />
      </Example>
      <Github paths={['src/modules/openai/OpenAiController.ts', 'src/app/openai/OpenAiExample.tsx']} />
    </>
  );
}
