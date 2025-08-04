import getGithubFiles from '@/lib/getGithubFiles';
import GithubCode from './GithubCode';

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
