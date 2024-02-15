import Github from '@/components/Github';
import BasicExampleWithService from './BasicExampleWithService';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';

export const metadata: PageMetadata = {
  title: 'Vovk.ts - Basic Controller with Service',
  description: 'Basic usage of Vovk Controller and Service.',
};

export default async function BasicControllerPage() {
  const githubFiles = await getGithubFiles([
    'src/modules/basic-with-service/BasicService.ts',
    'src/modules/basic-with-service/BasicControllerWithService.ts',
    'src/app/basic-with-service/BasicExampleWithService.tsx',
  ]);

  return (
    <>
      <Example title={metadata.title} className="text-center" description={metadata.description}>
        <BasicExampleWithService />
      </Example>
      <Github githubFiles={githubFiles} />
    </>
  );
}
