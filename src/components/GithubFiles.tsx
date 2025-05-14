import getGithubFiles from '@/lib/getGithubFiles';
import Github from './Github';

interface Props {
  paths: string[];
}

export default async function GithubFiles({ paths }: Props) {
  const githubFiles = await getGithubFiles(paths);
  return <Github githubFiles={githubFiles} />;
}
