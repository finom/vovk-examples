import Github from '@/components/Github';
import DtoFormExample from './DtoFormExample';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';
import Link from 'next/link';
import reactToString from 'react-to-string';

const description = (
  <>
    Form input handling and{' '}
    <Link href="https://www.npmjs.com/package/class-validator" target="_blank">
      class validation
    </Link>{' '}
    with{' '}
    <Link href="https://github.com/finom/vovk-yudtop" target="_blank">
      vovk-dto
    </Link>
    . The request input is validated on the client-side before being sent to the server where it is validated again.
    Notice that the input data needs to be transformed with{' '}
    <Link href="https://www.npmjs.com/package/class-transformer" target="_blank">
      class-transformer
    </Link>{' '}
    into a DTO class in order to be validated on the client-side.
  </>
);

export const metadata: PageMetadata = {
  title: 'DTO validation example',
  description: reactToString(description),
  openGraph: {
    description: reactToString(description),
  },
};

export default async function ZodControllerPage() {
  const githubFiles = await getGithubFiles([
    'src/modules/dto/dto.ts',
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
