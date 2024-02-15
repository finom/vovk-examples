import Github from '@/components/Github';
import WorkerYieldExample from './WorkerYieldExample';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';

export const metadata: PageMetadata = {
  title: 'Vovk.ts - Worker Service Generator Example',
  description:
    'This example demonstrates π calculation with BigInt in a separate browser thread. The result is sent back to the main thread every 1000 iterations.',
};

export default async function WorkerServicePage() {
  const githubFiles = await getGithubFiles([
    'src/modules/worker-yield/WorkerYieldService.ts',
    'src/app/worker-yield/WorkerYieldExample.tsx',
  ]);
  return (
    <>
      <Example className="text-center" title={metadata.title} description={metadata.description}>
        <WorkerYieldExample />
      </Example>
      <Github githubFiles={githubFiles} />
    </>
  );
}
