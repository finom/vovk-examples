import { Code } from "bright"

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
                Accept: 'application/vnd.github.VERSION.raw'
            }
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

const Github = async ({ paths }: Props) => {
    const files = await Promise.all(paths.map(getGithubFile));

    console.log('files', files);

    return (
        <div>
            <h1>Github</h1>
            <div>
                {files.map((file, i) => (
                    <div key={i}>
                        <h2>{paths[i]}</h2>
                        <Code lang="ts">{file}</Code>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Github;