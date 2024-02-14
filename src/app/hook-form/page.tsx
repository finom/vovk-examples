import Github from '@/components/Github';
import HookFormExample from './HookFormExample';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';

export const metadata: PageMetadata = {
  title: 'Vovk.ts - React Hook Form Example',
  description: 'Form handling with react-hook-form and Zod validation.',
};

export default function HookFormControllerPage() {
  return (
    <>
      <Example title={metadata.title} className="text-center" description={metadata.description}>
        <HookFormExample />
      </Example>
      <Github paths={['src/zod.ts', 'src/modules/form/FormController.ts', 'src/app/hook-form/HookFormExample.tsx']} />
    </>
  );
}
