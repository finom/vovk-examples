import Title from './Title';
import CodeBlock from '../CodeBlock';

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
