import { ReactNode } from 'react';

interface Props {
  className?: string;
  title: string;
  description: string;
  children: ReactNode;
}

const Example = ({ className, title, description, children }: Props) => {
  return (
    <>
      <h1 className="text-center">{title.split('-')[1].trim()}</h1>
      <p className="text-center max-w-[800px] m-auto">{description}</p>
      <div className={`shadow-md rounded-lg p-4 my-4 bg-[#0d1117] ${className ?? ''}`}>{children}</div>
    </>
  );
};

export default Example;
