import Github from '@/components/Github';
import WorkerYieldExample from './WorkerYieldExample';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';
import Link from 'next/link';
import reactToString from 'react-to-string';

const description = (
  <>
    This example demonstrates π approximation with{' '}
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
    <Link href="https://vovk.dev/worker" target="_blank">
      WPC Class
    </Link>
    . The result is sent back to the main thread every 1000 iterations.
  </>
);

export const metadata: PageMetadata = {
  title: 'WPC Class Generator Example',
  description: reactToString(description),
  openGraph: {
    description: reactToString(description),
  },
};

export default async function HelloWorkerPage() {
  const githubFiles = await getGithubFiles([
    'src/modules/worker-yield/HelloWorkerYield.ts',
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
