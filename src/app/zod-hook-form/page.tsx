import Github from '@/components/Github';
import ZodHookFormExample from './ZodHookFormExample';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';
import Link from 'next/link';
import reactToString from 'react-to-string';

const description = (
  <>
    Form input handling with{' '}
    <Link href="https://react-hook-form.com/" target="_blank">
      react-hook-form
    </Link>{' '}
    and{' '}
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
  title: 'Zod + React Hook Form example',
  description: reactToString(description),
  openGraph: {
    description: reactToString(description),
  },
};

export default async function ZodHookFormControllerPage() {
  const githubFiles = await getGithubFiles([
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
