import Github from '@/components/Github';
import Example from '@/components/Example';
import StreamExample from './StreamExample';
import getGithubFiles from '@/lib/getGithubFiles';
import type { PageMetadata } from '@/types';

export const metadata: PageMetadata = {
  title: 'Vovk.ts - Stream Controller using Response Object',
  description: `Instead of generators you can return StreamResponse object in order to get more control over your stream code.`,
};

export default async function StreamControllerPage() {
  const githubFiles = await getGithubFiles([
    'src/modules/stream-response-object/StreamService.ts',
    'src/modules/stream-response-object/StreamResponseObjectController.ts',
    'src/app/stream-response-object/StreamExample.tsx',
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
