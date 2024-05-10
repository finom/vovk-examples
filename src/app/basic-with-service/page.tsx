import Github from '@/components/Github';
import BasicExampleWithService from './BasicExampleWithService';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';
import Link from 'next/link';
import reactToString from 'react-to-string';

const description = (
  <>
    Basic usage of{' '}
    <Link href="https://vovk.dev/controller" target="_blank">
      Vovk Controller
    </Link>{' '}
    and{' '}
    <Link href="https://vovk.dev/controller/service" target="_blank">
      Service
    </Link>
    .
  </>
);

export const metadata: PageMetadata = {
  title: 'Basic Controller with Service',
  description: reactToString(description),
  openGraph: {
    description: reactToString(description),
  },
};

export default async function BasicControllerPage() {
  const githubFiles = await getGithubFiles([
    'src/modules/basic-with-service/BasicService.ts',
    'src/modules/basic-with-service/BasicControllerWithService.ts',
    'src/app/basic-with-service/BasicExampleWithService.tsx',
  ]);

  return (
    <>
      <Example title={metadata.title} className="text-center" description={description}>
        <BasicExampleWithService />
      </Example>
      <Github githubFiles={githubFiles} />
    </>
  );
}
