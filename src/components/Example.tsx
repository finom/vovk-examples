import { ReactNode } from 'react';

interface Props {
  className?: string;
  title: string;
  children: ReactNode;
}

const Example = ({ className, title, children }: Props) => {
  return (
    <>
      <h1 className="text-center">{title}</h1>
      <div className={`shadow-md rounded-xl p-4 my-4 bg-white ${className ?? ''}`}>{children}</div>
    </>
  );
};

export default Example;
