import Github from '@/components/Github';
import BasicExample from './BasicExample';
import Example from '@/components/Example';
import { PageMetadata } from '@/types';

export const metadata: PageMetadata = {
  title: 'Vovk.ts - Basic Controller Example',
  description: 'Basic usage of Vovk Controller.',
};

export default function BasicControllerPage() {
  return (
    <>
      <Example title={metadata.title} className="text-center" description={metadata.description}>
        <BasicExample />
      </Example>
      <Github paths={['src/modules/basic/BasicController.ts', 'src/app/basic/BasicExample.tsx']} />
    </>
  );
}
