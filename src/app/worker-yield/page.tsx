import Github from '@/components/Github';
import WorkerYieldExample from './WorkerYieldExample';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';
import Link from 'next/link';
import reactToString from 'react-to-string';

const description = (
  <>
    This example demonstrates π calculation with{' '}
    <Link
      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt"
      target="_blank"
    >
      BigInt
    </Link>{' '}
    in a{' '}
    <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API" target="_blank">
      separate browser thread
    </Link>{' '}
    using a{' '}
    <Link href="https://docs.vovk.dev/docs/worker" target="_blank">
      Worker Service Class
    </Link>
    . The result is sent back to the main thread every 1000 iterations.
  </>
);

export const metadata: PageMetadata = {
  title: 'Vovk.ts - Worker Service Class Generator Example',
  description: reactToString(description),
};

export default async function WorkerServicePage() {
  const githubFiles = await getGithubFiles([
    'src/modules/worker-yield/WorkerYieldService.ts',
    'src/app/worker-yield/WorkerYieldExample.tsx',
  ]);
  return (
    <>
      <Example className="text-center" title={metadata.title} description={description}>
        <WorkerYieldExample />
      </Example>
      <Github githubFiles={githubFiles} />
    </>
  );
}
