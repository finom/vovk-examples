import Github from '@/components/Github';
import ZodFormExample from './ZodFormExample';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';
import Link from 'next/link';
import reactToString from 'react-to-string';

const description = (
  <>
    Form input handling and{' '}
    <Link href="https://zod.dev/" target="_blank">
      Zod
    </Link>{' '}
    validation with{' '}
    <Link href="https://github.com/finom/vovk-zod" target="_blank">
      vovk-zod
    </Link>
    . The request input is validated on the client-side before being sent to the server where it is validated again.
  </>
);

export const metadata: PageMetadata = {
  title: 'Zod validation example',
  description: reactToString(description),
  openGraph: {
    description: reactToString(description),
  },
};

export default async function ZodControllerPage() {
  const githubFiles = await getGithubFiles([
    'src/modules/zod/ZodController.ts',
    'src/app/zod/ZodFormExample.tsx',
  ]);
  return (
    <>
      <Example title={metadata.title} className="text-center" description={description}>
        <ZodFormExample />
      </Example>
      <Github githubFiles={githubFiles} />
    </>
  );
}
