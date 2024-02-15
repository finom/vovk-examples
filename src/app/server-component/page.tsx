import Github from '@/components/Github';
import ServerComponentExample from './ServerComponentExample';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';

export const metadata: PageMetadata = {
  title: 'Vovk.ts - Server Component Example',
  description: `Vovk.ts client can also be used in a Server Component. To do so, you need to define "prefix" option that indicates absolute URL to the root API endpoint that overrides default relative URL.`,
};

export default async function ServerComponentPage() {
  const githubFiles = await getGithubFiles([
    'src/modules/basic/BasicController.ts',
    'src/app/server-component/ServerComponentExample.tsx',
    'vovk.config.js',
  ]);
  return (
    <>
      <Example className="text-center" title={metadata.title} description={metadata.description}>
        <ServerComponentExample />
      </Example>
      <Github githubFiles={githubFiles} />
    </>
  );
}
