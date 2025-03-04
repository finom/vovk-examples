import Github from '@/components/Github';
import BasicExample from './OpenapiExample';
import Example from '@/components/Example';
import type { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';
import reactToString from 'react-to-string';
import Link from 'next/link';

const description = (
  <>
    OpenAPI example {' '}
    <Link href="https://vovk.dev/controller" target="_blank">
    OpenAPI example
    </Link>
    .
  </>
);

export const metadata: PageMetadata = {
  title: 'OpenAPI example',
  description: reactToString(description),
  openGraph: {
    description: reactToString(description),
  },
};

export default async function BasicControllerPage() {
  const githubFiles = await getGithubFiles(['src/modules/static/openapi/OpenapiController.ts', 'src/app/openapi/OpenapiExample.tsx']);
  return (
    <>
      <Example title={metadata.title} className="text-center" description={description}>
        <BasicExample />
      </Example>
      <Github githubFiles={githubFiles} />
    </>
  );
}
