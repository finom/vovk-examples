import { Code } from 'bright';
import GithubTabs from './GithubTabs';

const OWNER = 'finom';
const REPO = 'vovk-examples';
const REF = 'main';

async function makeDirectRequest(path: string) {
  const resp = await fetch(`https://raw.githubusercontent.com/${OWNER}/${REPO}/${REF}/${path}?t=${Date.now()}`);
  return resp.text();
}

async function getGithubFile(path: string) {
  let resp;

  try {
    resp = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}?ref=${REF}&t=${Date.now()}`, {
      headers: {
        Accept: 'application/vnd.github.VERSION.raw',
      },
    });
  } catch (e) {
    // fallback in case if API limmit is exceeded
    return makeDirectRequest(path);
  }

  if (resp.status !== 200) {
    return makeDirectRequest(path);
  }

  return resp.text();
}

interface Props {
  paths: string[];
}

Code.theme = 'github-dark';

const Github = async ({ paths }: Props) => {
  const files = await Promise.all(paths.map(getGithubFile));

  return (
    <div className={`bg-[#0d1117] rounded-lg`}>
      <GithubTabs paths={paths} />
      {files.map((file, i) => (
        <div key={i} className={`h-full github-tab-content ${i ? 'hidden' : ''}`} id={`tab${i}`}>
          <Code lang="tsx">{file.trim()}</Code>
        </div>
      ))}
    </div>
  );
};

export default Github;
