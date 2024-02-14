import Github from '@/components/Github';
import FormExample from './FormExample';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';

export const metadata: PageMetadata = {
  title: 'Vovk.ts - Form Example',
  description: 'Basic form handling and Zod validation.',
};

export default function FormControllerPage() {
  return (
    <>
      <Example title={metadata.title} className="text-center" description={metadata.description}>
        <FormExample />
      </Example>
      <Github paths={['src/zod.ts', 'src/modules/form/FormController.ts', 'src/app/form/FormExample.tsx']} />
    </>
  );
}
