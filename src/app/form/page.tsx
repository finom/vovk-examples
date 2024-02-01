import Github from '@/components/Github';
import FormExample from './FormExample';
import Example from '@/components/Example';

export default function FormControllerPage() {
  return (
    <>
      <Example title="Form Example" className="text-center">
        <FormExample />
      </Example>
      <Github paths={['src/zod.ts', 'src/modules/form/FormController.ts', 'src/app/form/FormExample.tsx']} />
    </>
  );
}
