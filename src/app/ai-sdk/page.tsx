import Github from '@/components/Github';
import Example from '@/components/Example';
import StreamExample from './AiSdkExample';
import { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';
import Link from 'next/link';
import reactToString from 'react-to-string';

const description = (
  <>
    <Link href="https://github.com/vercel/ai" target="_blank">
      AI SDK Example
    </Link>
    . Notice how the Vercel library is used: result.toDataStreamResponse returns a Response object that is passed
    forward as is.
  </>
);

export const metadata: PageMetadata = {
  title: 'Vercel AI SDK',
  description: reactToString(description),
  openGraph: {
    description: reactToString(description),
  },
};

export default async function StreamControllerPage() {
  const githubFiles = await getGithubFiles([
    'src/modules/ai-sdk/AiSdkController.ts',
    'src/app/ai-sdk/AiSdkExample.tsx',
  ]);
  return (
    <>
      <Example title={metadata.title} description={description}>
        <StreamExample />
      </Example>
      <Github githubFiles={githubFiles} />
    </>
  );
}
