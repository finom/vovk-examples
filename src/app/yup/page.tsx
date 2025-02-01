import Github from '@/components/Github';
import YupFormExample from './YupFormExample';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';
import Link from 'next/link';
import reactToString from 'react-to-string';

const description = (
  <>
    Form input handling and{' '}
    <Link href="https://yup-docs.vercel.app/" target="_blank">
      Yup
    </Link>{' '}
    validation with{' '}
    <Link href="https://github.com/finom/vovk-yup" target="_blank">
      vovk-yup
    </Link>
    . The request input is validated on the client-side before being sent to the server where it is validated again.
  </>
);

export const metadata: PageMetadata = {
  title: 'Yup validation example',
  description: reactToString(description),
  openGraph: {
    description: reactToString(description),
  },
};

export default async function YupControllerPage() {
  const githubFiles = await getGithubFiles([
    'src/modules/yup/YupController.ts',
    'src/app/yup/YupFormExample.tsx',
  ]);
  return (
    <>
      <Example title={metadata.title} className="text-center" description={description}>
        <YupFormExample />
      </Example>
      <Github githubFiles={githubFiles} />
    </>
  );
}
