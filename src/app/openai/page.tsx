import Github from '@/components/Github';
import OpenAiExample from './OpenAiExample';
import Example from '@/components/Example';

export default function BasicControllerPage() {
  return (
    <>
      <Example title="OpenAI Chat">
        <OpenAiExample />
      </Example>
      <Github paths={['src/modules/openai/OpenAiController.ts', 'src/app/openai/OpenAiExample.tsx']} />
    </>
  );
}
