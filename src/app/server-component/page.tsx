import Github from '@/components/Github';
import ServerComponentExample from './ServerComponentExample';
import Example from '@/components/Example';

export default function ServerComponentPage() {
  return (
    <>
      <Example title="Basic Controller" className="text-center">
        <ServerComponentExample />
      </Example>
      <Github paths={['src/modules/basic/BasicController.ts', 'src/app/server-component/ServerComponentExample.tsx']} />
    </>
  );
}
