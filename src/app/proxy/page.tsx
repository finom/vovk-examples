import Github from '@/components/Github';
import ProxyExample from './ProxyExample';
import Example from '@/components/Example';
import type { PageMetadata } from '@/types';
import getGithubFiles from '@/lib/getGithubFiles';
import reactToString from 'react-to-string';
import Link from 'next/link';

const description = <>JSON proxy example.</>;

export const metadata: PageMetadata = {
  title: 'Proxy Controller Example',
  description: reactToString(description),
  openGraph: {
    description: reactToString(description),
  },
};

export default async function BasicControllerPage() {
  const githubFiles = await getGithubFiles(['src/modules/proxy/ProxyController.ts', 'src/app/proxy/ProxyExample.tsx']);
  return (
    <>
      <Example title={metadata.title} className="text-center" description={description}>
        <ProxyExample />
      </Example>
      <Github githubFiles={githubFiles} />
    </>
  );
}
