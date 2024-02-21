import Github from '@/components/Github';
import HookFormExample from './HookFormExample';
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
  title: 'Vovk.ts - React Hook Form Example',
  description: reactToString(description),
};

export default async function HookFormControllerPage() {
  const githubFiles = await getGithubFiles([
    'src/zod.ts',
    'src/modules/form/FormController.ts',
    'src/app/hook-form/HookFormExample.tsx',
  ]);
  return (
    <>
      <Example title={metadata.title} className="text-center" description={description}>
        <HookFormExample />
      </Example>
      <Github githubFiles={githubFiles} />
    </>
  );
}
