import GithubTabs from './GithubTabs';
import type { GithubFile } from '@/types';
import CodeBlock from './CodeBlock';

const Github = async ({ githubFiles }: { githubFiles: GithubFile[] }) => {
  return (
    <div className={`bg-code rounded-lg`}>
      <GithubTabs githubFiles={githubFiles} />
      {githubFiles.map(({ content }, i) => (
        <div key={i} className={`h-full github-tab-content ${i ? 'hidden' : ''}`} id={`tab${i}`}>
          <CodeBlock lineNumbers>{content.trim()}</CodeBlock>
        </div>
      ))}
    </div>
  );
};

export default Github;
