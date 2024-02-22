import Title from './Title';
import CodeBlock from '../CodeBlock';

interface Props {
  title: string;
  href: string;
  children: string;
}

const CodeBox = ({ title, href, children }: Props) => {
  return (
    <div className="bg-code rounded-lg overflow-hidden border-gray-300/20 dark:border-gray-700/20">
      <Title href={href}>{title}</Title>
      <CodeBlock className="text-sm">{children}</CodeBlock>
    </div>
  );
};

export default CodeBox;
