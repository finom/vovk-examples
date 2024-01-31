import Github from '@/components/Github';
import Example from '@/components/Example';
import StreamExample from './StreamExample';

export default function StreamControllerPage() {
  return (
    <>
      <Example title="Stream Controller using Response Object" className="text-center">
        <StreamExample />
      </Example>
      <Github
        paths={[
          'src/modules/streamResponseObject/StreamService.ts',
          'src/modules/streamResponseObject/StreamResponseObjectController.ts',
          'src/app/stream-response-object/StreamExample.tsx',
        ]}
      />
    </>
  );
}
