import Github from '@/components/Github';
import Example from '@/components/Example';
import StreamExample from './StreamExample';
import getGithubFiles from '@/lib/getGithubFiles';
import type { PageMetadata } from '@/types';
import Link from 'next/link';
import reactToString from 'react-to-string';

const description = (
  <>
    Instead of generators you can return{' '}
    <Link href="https://docs.vovk.dev/docs/controller#streamresponse" target="_blank">
      StreamResponse
    </Link>{' '}
    object in order to get more control over your stream code.
  </>
);

export const metadata: PageMetadata = {
  title: 'Vovk.ts - Stream using Response Object',
  description: reactToString(description),
};

export default async function StreamControllerPage() {
  const githubFiles = await getGithubFiles([
    'src/modules/stream-response-object/StreamService.ts',
    'src/modules/stream-response-object/StreamResponseObjectController.ts',
    'src/app/stream-response-object/StreamExample.tsx',
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
