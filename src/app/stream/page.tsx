import Github from '@/components/Github';
import Example from '@/components/Example';
import StreamExample from './StreamExample';
import { PageMetadata } from '@/types';

export const metadata: PageMetadata = {
  title: 'Vovk.ts - Stream Example',
  description: 'Response streaming and async generators.',
};

export default function StreamControllerPage() {
  return (
    <>
      <Example className="text-center" title={metadata.title} description={metadata.description}>
        <StreamExample />
      </Example>
      <Github paths={['src/modules/stream/StreamController.ts', 'src/app/stream/StreamExample.tsx']} />
    </>
  );
}
