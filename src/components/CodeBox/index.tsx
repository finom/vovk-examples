import Title from './Title.tsx';
import CodeBlock from '../GithubFiles/CodeBlock.tsx';

interface Props {
  title: string;
  href?: string;
  children: string;
}

const CodeBox = ({ title, href, children }: Props) => {
  return (
    <div className="bg-code rounded-lg overflow-hidden">
      <Title href={href}>{title}</Title>
      <CodeBlock className="text-sm">{children}</CodeBlock>
    </div>
  );
};

export default CodeBox;
