import Github from '@/components/Github';
import WorkerExample from './WorkerExample';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';

export const metadata: PageMetadata = {
  title: 'Vovk.ts - Worker Service Example',
  description: 'This example demonstrates BigInt factorization in a separate browser thread.',
};

export default function WorkerServicePage() {
  return (
    <>
      <Example className="text-center" title={metadata.title} description={metadata.description}>
        <WorkerExample />
      </Example>
      <Github paths={['src/modules/worker/WorkerService.ts', 'src/app/worker/WorkerExample.tsx']} />
    </>
  );
}
