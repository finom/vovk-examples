import Title from './Title';
import CodeBlock from '../CodeBlock';

interface Props {
  title: string;
  href?: string;
  children: string;
}

const CodeBox = ({ title, href, children }: Props) => {
  return (
    <div className="bg-code rounded-lg overflow-hidden border border-solid border-gray-900/10 dark:border-gray-100/10">
      <Title href={href}>{title}</Title>
      <CodeBlock className="text-sm">{children}</CodeBlock>
    </div>
  );
};

export default CodeBox;
