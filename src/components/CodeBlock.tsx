import { Code } from 'bright';

interface Props {
  lineNumbers?: boolean;
  className?: string;
  children: string;
}

Code.theme = {
  dark: 'github-dark',
  light: 'github-light',
};

const CodeBlock = ({ lineNumbers, className, children }: Props) => {
  const lines = children.split('\n');
  const maxSpaces = lines.reduce((max, line) => {
    if (line.trim().length === 0) {
      return max;
    }
    const spaces = line.match(/^ */)?.[0].length ?? 0;
    return Math.min(max, spaces);
  }, 100);
  const newLines = lines.map((line) => line.slice(maxSpaces));

  if (newLines[0].trim().length === 0) {
    newLines.shift();
  }

  if (newLines[newLines.length - 1].trim().length === 0) {
    newLines.pop();
  }

  const code = newLines.join('\n');
  return (
    <>
      <div data-theme="dark" className="hidden dark:block">
        <Code lang="tsx" className={className} lineNumbers={lineNumbers}>
          {code}
        </Code>
      </div>{' '}
      <div data-theme="light" className="dark:hidden">
        <Code lang="tsx" className={className} lineNumbers={lineNumbers}>
          {code}
        </Code>
      </div>
    </>
  );
};

export default CodeBlock;
