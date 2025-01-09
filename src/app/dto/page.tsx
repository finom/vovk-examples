import Github from '@/components/Github';
import DtoFormExample from './DtoFormExample';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';
import Link from 'next/link';
import reactToString from 'react-to-string';

const description = (
  <>
    Basic form handling and validation with{' '}
    <Link href="hhttps://www.npmjs.com/package/class-validator" target="_blank">
      class-validator
    </Link>{' '}
    and{' '}
    <Link href="https://github.com/finom/vovk-zod" target="_blank">
      vovk-dto TODO LINK
    </Link>
    .
  </>
);

export const metadata: PageMetadata = {
  title: 'Class Validator (DTO) Example',
  description: reactToString(description),
  openGraph: {
    description: reactToString(description),
  },
};

export default async function ZodControllerPage() {
  const githubFiles = await getGithubFiles([
    'src/dto.ts',
    'src/modules/dto/DtoController.ts',
    'src/app/dto/DtoFormExample.tsx',
  ]);
  return (
    <>
      <Example title={metadata.title} className="text-center" description={description}>
        <DtoFormExample />
      </Example>
      <Github githubFiles={githubFiles} />
    </>
  );
}
