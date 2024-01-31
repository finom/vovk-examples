import Github from '@/components/Github';
import Example from '@/components/Example';
import StreamExample from './StreamExample';

export default function StreamControllerPage() {
  return (
    <>
      <Example title="Stream Controller" className="text-center">
        <StreamExample />
      </Example>
      <Github paths={['src/modules/stream/StreamController.ts', 'src/app/stream/StreamExample.tsx']} />
    </>
  );
}
