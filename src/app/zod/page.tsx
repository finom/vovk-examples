import Github from '@/components/Github';
import ZodFormExample from './ZodFormExample';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';
import Link from 'next/link';
import reactToString from 'react-to-string';

const description = (
  <>
    Basic form handling and{' '}
    <Link href="https://zod.dev/" target="_blank">
      Zod
    </Link>{' '}
    validation with{' '}
    <Link href="https://github.com/finom/vovk-zod" target="_blank">
      vovk-zod
    </Link>
    .
  </>
);

export const metadata: PageMetadata = {
  title: 'Zod Example',
  description: reactToString(description),
  openGraph: {
    description: reactToString(description),
  },
};

export default async function ZodControllerPage() {
  const githubFiles = await getGithubFiles([
    'src/zod.ts',
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
