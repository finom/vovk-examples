import Github from '@/components/Github';
import WorkerExample from './WorkerExample';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';
import Link from 'next/link';
import reactToString from 'react-to-string';

const description = (
  <>
    This example demonstrates{' '}
    <Link
      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt"
      target="_blank"
    >
      BigInt
    </Link>{' '}
    factorization in a{' '}
    <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API" target="_blank">
      separate browser thread
    </Link>{' '}
    using a{' '}
    <Link href="https://vovk.dev/worker" target="_blank">
      WPC Class
    </Link>
    .
  </>
);

export const metadata: PageMetadata = {
  title: 'Web Worker (WPC) example',
  description: reactToString(description),
  openGraph: {
    description: reactToString(description),
  },
};

export default async function HelloWorkerPage() {
  const githubFiles = await getGithubFiles(['src/modules/worker/HelloWorker.ts', 'src/app/worker/WorkerExample.tsx']);
  return (
    <>
      <Example className="text-center" title={metadata.title} description={description}>
        <WorkerExample />
      </Example>
      <Github githubFiles={githubFiles} />
    </>
  );
}
