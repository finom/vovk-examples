import Github from '@/components/Github';
import ServerComponentExample from './ServerComponentExample';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';
import Link from 'next/link';
import reactToString from 'react-to-string';

const description = (
  <>
    Since Vovk.ts emits RPC library that use <code>fetch</code> to send requests, you can use its methods in a{' '}
    <Link href="https://nextjs.org/docs/app/building-your-application/rendering/server-components" target="_blank">
      Server Component
    </Link>
    . To do so, you need to define &quot;origin&quot; config option. See the example config below.
  </>
);

export const metadata: PageMetadata = {
  title: 'Server component example',
  description: reactToString(description),
  openGraph: {
    description: reactToString(description),
  },
};

export default async function ServerComponentPage() {
  const githubFiles = await getGithubFiles([
    'src/modules/basic/BasicController.ts',
    'src/app/server-component/ServerComponentExample.tsx',
    'vovk.config.mjs',
  ]);
  return (
    <>
      <Example className="text-center" title={metadata.title} description={description}>
        <ServerComponentExample />
      </Example>
      <Github githubFiles={githubFiles} />
    </>
  );
}
