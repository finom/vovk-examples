import Github from '@/components/Github';
import ServerComponentExample from './ServerComponentExample';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';
import Link from 'next/link';
import reactToString from 'react-to-string';

const description = (
  <>
    Vovk.ts client can also be used in a{' '}
    <Link href="https://nextjs.org/docs/app/building-your-application/rendering/server-components" target="_blank">
      Server Component
    </Link>
    . To do so, you need to define &quot;prefix&quot; option that indicates absolute URL to the root API endpoint that
    overrides default relative URL.
  </>
);

export const metadata: PageMetadata = {
  title: 'Server Component Example',
  description: reactToString(description),
  openGraph: {
    description: reactToString(description),
  },
};

export default async function ServerComponentPage() {
  const githubFiles = await getGithubFiles([
    'src/modules/basic/BasicController.ts',
    'src/app/server-component/ServerComponentExample.tsx',
    'vovk.config.js',
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
