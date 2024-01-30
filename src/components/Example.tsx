import { ReactNode } from 'react';

interface Props {
  className?: string;
  title: string;
  children: ReactNode;
}

const Example = ({ className, title, children }: Props) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className="shadow-md rounded-xl p-4 my-4 bg-white">{children}</div>
    </div>
  );
};

export default Example;
