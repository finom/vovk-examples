import Github from '@/components/Github';
import Example from '@/components/Example';
import StreamExample from './StreamExample';
import { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';

export const metadata: PageMetadata = {
  title: 'Vovk.ts - Stream Example',
  description: 'Response streaming and async generators.',
};

export default async function StreamControllerPage() {
  const githubFiles = await getGithubFiles([
    'src/modules/stream/StreamController.ts',
    'src/app/stream/StreamExample.tsx',
  ]);
  return (
    <>
      <Example className="text-center" title={metadata.title} description={metadata.description}>
        <StreamExample />
      </Example>
      <Github githubFiles={githubFiles} />
    </>
  );
}
