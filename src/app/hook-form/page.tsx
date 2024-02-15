import Github from '@/components/Github';
import HookFormExample from './HookFormExample';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';

export const metadata: PageMetadata = {
  title: 'Vovk.ts - React Hook Form Example',
  description: 'Form handling with react-hook-form and Zod validation.',
};

export default async function HookFormControllerPage() {
  const githubFiles = await getGithubFiles([
    'src/zod.ts',
    'src/modules/form/FormController.ts',
    'src/app/hook-form/HookFormExample.tsx',
  ]);
  return (
    <>
      <Example title={metadata.title} className="text-center" description={metadata.description}>
        <HookFormExample />
      </Example>
      <Github githubFiles={githubFiles} />
    </>
  );
}
