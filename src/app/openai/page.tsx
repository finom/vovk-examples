import Github from '@/components/Github';
import OpenAiExample from './OpenAiExample';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';
import Link from 'next/link';
import reactToString from 'react-to-string';

const description = (
  <>
    Real use-case of{' '}
    <Link href="https://docs.vovk.dev/docs/controller#streaming" target="_blank">
      response streaming
    </Link>{' '}
    with{' '}
    <Link
      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator"
      target="_blank"
    >
      async generators
    </Link>{' '}
    using{' '}
    <Link href="https://www.npmjs.com/package/openai" target="_blank">
      OpenAI API
    </Link>
    .
  </>
);

export const metadata: PageMetadata = {
  title: 'OpenAI Chat Example',
  description: reactToString(description),
  openGraph: {
    description: reactToString(description),
  },
};

export default async function BasicControllerPage() {
  const githubFiles = await getGithubFiles([
    'src/modules/openai/OpenAiController.ts',
    'src/app/openai/OpenAiExample.tsx',
  ]);
  return (
    <>
      <Example title={metadata.title} description={description}>
        <OpenAiExample />
      </Example>
      <Github githubFiles={githubFiles} />
    </>
  );
}
