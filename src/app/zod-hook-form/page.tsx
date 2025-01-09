import Github from '@/components/Github';
import ZodHookFormExample from './ZodHookFormExample';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';
import Link from 'next/link';
import reactToString from 'react-to-string';

const description = (
  <>
    Form handling with{' '}
    <Link href="https://react-hook-form.com/" target="_blank">
      react-hook-form
    </Link>{' '}
    and{' '}
    <Link href="https://zod.dev/" target="_blank">
      Zod
    </Link>{' '}
    validation .
  </>
);

export const metadata: PageMetadata = {
  title: 'Zod + React Hook Form Example',
  description: reactToString(description),
  openGraph: {
    description: reactToString(description),
  },
};

export default async function ZodHookFormControllerPage() {
  const githubFiles = await getGithubFiles([
    'src/zod.ts',
    'src/modules/zod/ZodController.ts',
    'src/app/zod-hook-form/ZodHookFormExample.tsx',
  ]);
  return (
    <>
      <Example title={metadata.title} className="text-center" description={description}>
        <ZodHookFormExample />
      </Example>
      <Github githubFiles={githubFiles} />
    </>
  );
}
