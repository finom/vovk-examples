import { Code } from 'bright';
import GithubTabs from './GithubTabs';
import type { GithubFile } from '@/types';

Code.theme = 'github-dark';

const Github = async ({ githubFiles }: { githubFiles: GithubFile[] }) => {
  return (
    <div className={`bg-[#0d1117] rounded-lg`}>
      <GithubTabs githubFiles={githubFiles} />
      {githubFiles.map(({ content }, i) => (
        <div key={i} className={`h-full github-tab-content ${i ? 'hidden' : ''}`} id={`tab${i}`}>
          <Code lang="tsx" lineNumbers>
            {content.trim()}
          </Code>
        </div>
      ))}
    </div>
  );
};

export default Github;
