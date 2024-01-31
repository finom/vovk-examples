import { Code } from 'bright';
import WindowAlike from './WindowAlike';

const OWNER = 'finom';
const REPO = 'vovk-examples';
const REF = 'main';

async function makeDirectRequest(path: string) {
  const resp = await fetch(`https://raw.githubusercontent.com/${OWNER}/${REPO}/${REF}/${path}`);
  return resp.text();
}

async function getGithubFile(path: string) {
  let resp;

  try {
    resp = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}?ref=${REF}`, {
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

Code.theme = 'github-light';

const Github = async ({ paths }: Props) => {
  const files = await Promise.all(paths.map(getGithubFile));

  return (
    <div className={`grid grid-cols-1 ${files.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-4`}>
      {files.map((file, i) => (
        <div key={i}>
          <WindowAlike fileName={paths[i]}>
            <Code lang="tsx">{file.trim()}</Code>
          </WindowAlike>
        </div>
      ))}
    </div>
  );
};

export default Github;
