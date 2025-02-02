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
    . The form is validated using RPC method schema emitted by <b>vovk-zod</b> with{' '}
    <Link href="https://ajv.js.org/" target="_blank">
      Ajv
    </Link>
    ,{' '}
    <Link href="https://www.npmjs.com/package/ajv-formats" target="_blank">
      Ajv formats
    </Link>{' '}
    and{' '}
    <Link href="https://www.npmjs.com/package/@hookform/resolvers#ajv" target="_blank">
      Ajv resolver
    </Link>
    . When the form is submitted, the request input is validated with the generic <code>validateOnClient</code> and,
    when the request is sent to the server, it is validated again with the original Zod schema.
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
