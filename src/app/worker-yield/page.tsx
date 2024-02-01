import Github from '@/components/Github';
import WorkerYieldExample from './WorkerYieldExample';
import Example from '@/components/Example';

export default function WorkerServicePage() {
  return (
    <>
      <Example title="Worker Service" className="text-center">
        <WorkerYieldExample />
      </Example>
      <Github
        paths={['src/modules/worker-yield/WorkerYieldService.ts', 'src/app/worker-yield/WorkerYieldExample.tsx']}
      />
    </>
  );
}
