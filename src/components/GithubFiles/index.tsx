import getGithubFiles from '@/lib/getGithubFiles.ts';
import GithubCode from './GithubCode.tsx';

interface Props {
  paths: string[];
}

export default async function GithubFiles({ paths }: Props) {
  const githubFiles = await getGithubFiles(paths, {
    owner: 'finom',
    repo: 'vovk-examples',
    ref: 'main',
  });
  return <GithubCode githubFiles={githubFiles} />;
}
