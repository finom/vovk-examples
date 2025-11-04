import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { getGithubFile } from "../src/lib/getGithubFiles.ts";

/*
PROMPT:

I need you to write a function updateGithubMDXCodeBlocks that processes MDX content and updates code blocks that reference GitHub files. The code blocks may contain various attributes, and we're targeting those with both 'filename' and 'repository' attributes only.

Your job is to find the code blocks like these and replace their content with the actual code fetched from the specified GitHub repository and file path using getGithubFile function that accepts the following parameters:

await getGithubFile(path, { owner, repo });

the owner and repo should be extracted from the 'repository' attribute, which is in the format 'owner/repo'.

Besides this you need to make sure that the code block is going to be followed by a line that contains a link to the GitHub file in the following format:*[The code above is fetched from GitHub repository.](https://github.com/owner/repo/blob/main/path/to/file)

For example:

```ts filename="src/modules/dto/UserDto.ts" repository="finom/vovk-examples"
// TEST
```
*[The code above is fetched from GitHub repository.](https://github.com/finom/vovk-examples/blob/main/src/modules/dto/UserDto.ts)*

The link always goes as a single line right after the code block and starts with *[ symbols. IF you see existing link you need to update it if the code block was changed. IF there is no existing link you need to add it.

Other content should remain unchanged. We're targeting only code blocks with both 'filename' and 'repository' attributes, even though they can be in different order or have other attributes as well.


----

Besides this function you should also implement processMDXFiles(path) that scans a given directory path for all .mdx files, reads their content, processes them using updateGithubMDXCodeBlocks, and writes the updated content back to the files.

Think carefully, think hard, this is important for my career.
*/

async function updateGithubMDXCodeBlocks(mdxContent: string) {
	// Regex to capture:
	// - fenceLine: everything on the opening line after ```
	// - code: the code content
	// - linkLine: an optional single line right after the closing fence that starts with *[
	const blockRe =
		/```(?<fenceLine>[^\n]*)\n(?<code>[\s\S]*?)\n```(?<linkLine>\n\*\[[^\n]*\]\([^)]+\)\*?)?/g;

	// Helper to parse attributes from the fence line (language + attrs)
	function parseAttrs(fenceLine: string): Record<string, string> {
		const attrs: Record<string, string> = {};
		const attrRe = /([a-zA-Z0-9_-]+)=(?:"([^"]+)"|'([^']+)'|([^\s"']+))/g;
		let m: RegExpExecArray | null;
		while ((m = attrRe.exec(fenceLine))) {
			const key = m[1];
			const val = m[2] ?? m[3] ?? m[4] ?? "";
			attrs[key] = val;
		}
		return attrs;
	}

	let out = "";
	let lastIndex = 0;

	const matches: Array<RegExpExecArray> = [];
	let m: RegExpExecArray | null;
	while ((m = blockRe.exec(mdxContent))) matches.push(m);

	for (const match of matches) {
		const { index } = match;
		const fenceLine = match.groups?.fenceLine ?? "";
		const code = match.groups?.code ?? "";
		const linkLine = match.groups?.linkLine ?? "";

		out += mdxContent.slice(lastIndex, index);

		const attrs = parseAttrs(fenceLine);
		const filename = attrs["filename"];
		const repository = attrs["repository"];

		// Only process blocks that have both filename and repository
		if (!filename || !repository) {
			out += match[0];
			lastIndex = (index ?? 0) + match[0].length;
			continue;
		}

		const [owner, repo] = repository.split("/");
		if (!owner || !repo) {
			// Malformed repository attribute; leave unchanged
			out += match[0];
			lastIndex = (index ?? 0) + match[0].length;
			continue;
		}

		let fetched = code;
		let replaced = false;
		try {
			const remote = await getGithubFile(filename, { owner, repo, ref: 'main' });
			if (typeof remote === "string" && remote !== code) {
				fetched = remote;
				replaced = true;
			}
		} catch {
			// On fetch error, leave the block untouched
			out += match[0];
			lastIndex = (index ?? 0) + match[0].length;
			continue;
		}

		// Build the link line we expect
		const expectedLink =
			`*[The code above is fetched from GitHub repository.](https://github.com/${owner}/${repo}/blob/main/${filename})*`;

		// Decide whether to update/add link
		let linkToUse = linkLine; // preserve if present and content not changed
		if (replaced || !linkLine) {
			linkToUse = "\n" + expectedLink;
		}

		// Reconstruct the block preserving the opening fence line
		const rebuilt =
			"```" +
			fenceLine +
			"\n" +
			fetched +
			"\n```" +
			(linkToUse ?? "");

		out += rebuilt;
		lastIndex = (index ?? 0) + match[0].length;
	}

	out += mdxContent.slice(lastIndex);
	return out;
}

export async function updateMDXFilesWithGithubContent(directoryPath: string) {
	async function getAllMdxFiles(dir: string, acc: string[] = []): Promise<string[]> {
		const entries = await readdir(dir, { withFileTypes: true });
		for (const e of entries) {
			const full = path.join(dir, e.name);
			if (e.isDirectory()) {
				await getAllMdxFiles(full, acc);
			} else if (e.isFile() && full.toLowerCase().endsWith(".mdx")) {
				acc.push(full);
			}
		}
		return acc;
	}

	const files = await getAllMdxFiles(directoryPath);
	for (const file of files) {
		const original = await readFile(file, "utf8");
		const updated = await updateGithubMDXCodeBlocks(original);
		if (updated !== original) {
			await writeFile(file, updated, "utf8");
		}
	}
}

void updateMDXFilesWithGithubContent(path.join(process.cwd(), 'src/app'));
