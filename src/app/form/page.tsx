import Github from '@/components/Github';
import FormExample from './FormExample';
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
  title: 'Vovk.ts - Form Example',
  description: reactToString(description),
};

export default async function FormControllerPage() {
  const githubFiles = await getGithubFiles([
    'src/zod.ts',
    'src/modules/form/FormController.ts',
    'src/app/form/FormExample.tsx',
  ]);
  return (
    <>
      <Example title={metadata.title} className="text-center" description={description}>
        <FormExample />
      </Example>
      <Github githubFiles={githubFiles} />
    </>
  );
}
