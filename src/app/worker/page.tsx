import Github from '@/components/Github';
import WorkerExample from './WorkerExample';
import Example from '@/components/Example';

export default function WorkerServicePage() {
  return (
    <>
      <Example title="Worker Service" className="text-center">
        <WorkerExample />
      </Example>
      <Github paths={['src/modules/worker/WorkerService.ts', 'src/app/worker/WorkerExample.tsx']} />
    </>
  );
}
