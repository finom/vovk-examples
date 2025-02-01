import Github from '@/components/Github';
import BasicExample from './BasicExample';
import Example from '@/components/Example';
import type { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';
import reactToString from 'react-to-string';
import Link from 'next/link';

const description = (
  <>
    Basic usage of{' '}
    <Link href="https://vovk.dev/controller" target="_blank">
      Vovk Controller
    </Link>
    .
  </>
);

export const metadata: PageMetadata = {
  title: 'Basic controller example',
  description: reactToString(description),
  openGraph: {
    description: reactToString(description),
  },
};

export default async function BasicControllerPage() {
  const githubFiles = await getGithubFiles(['src/modules/basic/BasicController.ts', 'src/app/basic/BasicExample.tsx']);
  return (
    <>
      <Example title={metadata.title} className="text-center" description={description}>
        <BasicExample />
      </Example>
      <Github githubFiles={githubFiles} />
    </>
  );
}
