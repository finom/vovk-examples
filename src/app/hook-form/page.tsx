import Github from '@/components/Github';
import HookFormExample from './HookFormExample';
import Example from '@/components/Example';

export default function HookFormControllerPage() {
  return (
    <>
      <Example title="React Hook Form Example" className="text-center">
        <HookFormExample />
      </Example>
      <Github paths={['src/zod.ts', 'src/modules/form/FormController.ts', 'src/app/form/HookFormExample.tsx']} />
    </>
  );
}
