import Github from '@/components/Github';
import BasicExample from './BasicExample';
import Example from '@/components/Example';
import type { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';

export const metadata: PageMetadata = {
  title: 'Vovk.ts - Basic Controller Example',
  description: 'Basic usage of Vovk Controller.',
};

export default async function BasicControllerPage() {
  const githubFiles = await getGithubFiles(['src/modules/basic/BasicController.ts', 'src/app/basic/BasicExample.tsx']);
  return (
    <>
      <Example title={metadata.title} className="text-center" description={metadata.description}>
        <BasicExample />
      </Example>
      <Github githubFiles={githubFiles} />
    </>
  );
}
