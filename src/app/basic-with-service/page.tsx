import Github from '@/components/Github';
import BasicExampleWithService from './BasicExampleWithService';
import Example from '@/components/Example';

export default function BasicControllerPage() {
  return (
    <>
      <Example title="Basic Controller with Service" className='text-center'>
        <BasicExampleWithService />
      </Example>
      <Github paths={[
        'src/modules/basicWithService/BasicService.ts', 
        'src/modules/basicWithService/BasicExampleWithService.ts', 
        'src/app/basic-with-service/BasicControllerWithService.tsx'
      ]} />
    </>
  );
}
