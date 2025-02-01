import Github from '@/components/Github';
import Example from '@/components/Example';
import StreamExample from './AiSdkExample';
import { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';
import Link from 'next/link';
import reactToString from 'react-to-string';

const description = (
  <>
    The <code>result.toDataStreamResponse</code> method returns a <code>Response</code> object, which is forwarded
    directly to the Next.js route handler. On the client side, you can use the <code>useChat</code> hook to consume the
    stream and render chat messages seamlessly, as outlined in the{' '}
    <Link href="https://github.com/vercel/ai" target="_blank">
      AI SDK
    </Link>{' '}
    documentation.
  </>
);

export const metadata: PageMetadata = {
  title: 'Vercel AI SDK example',
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
