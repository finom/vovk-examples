import Github from '@/components/Github';
import Example from '@/components/Example';
import StreamExample from './StreamExample';
import { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';
import Link from 'next/link';
import reactToString from 'react-to-string';

const description = (
  <>
    <Link href="https://vovk.dev/controller/streaming" target="_blank">
      Text streaming
    </Link>{' '}
    with{' '}
    <Link
      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator"
      target="_blank"
    >
      async generators
    </Link>
    .
  </>
);

export const metadata: PageMetadata = {
  title: 'JSON streaming example',
  description: reactToString(description),
  openGraph: {
    description: reactToString(description),
  },
};

export default async function StreamControllerPage() {
  const githubFiles = await getGithubFiles([
    'src/modules/stream/StreamController.ts',
    'src/app/stream/StreamExample.tsx',
  ]);
  return (
    <>
      <Example className="text-center" title={metadata.title} description={description}>
        <StreamExample />
      </Example>
      <Github githubFiles={githubFiles} />
    </>
  );
}
