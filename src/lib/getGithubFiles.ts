import type { GithubFile } from '@/types';

const OWNER = 'finom';
const REPO = 'vovk-examples';
const REF = 'main';

async function performDirectGithubRequest(path: string) {
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
    return performDirectGithubRequest(path);
  }

  if (resp.status !== 200) {
    return performDirectGithubRequest(path);
  }

  return resp.text();
}

export default async function getGithubFiles(githubPaths: string[]): Promise<GithubFile[]> {
  const githubContents = await Promise.all(githubPaths.map(getGithubFile));
  const githubFiles = githubContents.map((content, i) => ({ path: githubPaths[i], content }));

  return githubFiles;
}
