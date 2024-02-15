import { Code } from 'bright';
import Title from './Title';

interface Props {
  title: string;
  href: string;
  children: string;
}

const CodeBox = ({ title, href, children }: Props) => {
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
    <div className="bg-[#0d1117] rounded-lg overflow-hidden">
      <Title href={href}>{title.split('-')[1].trim()}</Title>
      <Code lang="tsx" className="text-sm">
        {code}
      </Code>
    </div>
  );
};

export default CodeBox;
