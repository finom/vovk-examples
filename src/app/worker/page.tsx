import Github from '@/components/Github';
import WorkerExample from './WorkerExample';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';

export const metadata: PageMetadata = {
  title: 'Vovk.ts - Worker Service Example',
  description: 'This example demonstrates BigInt factorization in a separate browser thread.',
};

export default async function WorkerServicePage() {
  const githubFiles = await getGithubFiles(['src/modules/worker/WorkerService.ts', 'src/app/worker/WorkerExample.tsx']);
  return (
    <>
      <Example className="text-center" title={metadata.title} description={metadata.description}>
        <WorkerExample />
      </Example>
      <Github githubFiles={githubFiles} />
    </>
  );
}
