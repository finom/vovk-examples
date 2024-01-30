import { ReactNode } from 'react';

interface Props {
  className?: string;
  fileName: string;
  children: ReactNode;
}

const WindowAlike = ({ children, fileName, className }: Props) => {
  const url = `https://github.com/finom/vovk-examples/tree/main/${fileName}`;
  return (
    <div
      className={`flex flex-col opacity-100 rounded-3xl shadow-xl bg-gradient-to-br from-[#9795f0] to-[#fbc8d4] ${
        className ?? ''
      }`}
    >
      <div className="flex items-center justify-between w-full px-4 py-[6px] lg:py-[10px] rounded-t-lg bg-white/80 relative z-10 backdrop-blur-xl dark:bg-[rgb(231_221_178_/_80%)]">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-[#EB6B5E] rounded-full md:w-[10px] md:h-[10px]" />
          <div className="w-2 h-2 bg-[#F3BD50] rounded-full md:w-[10px] md:h-[10px]" />
          <div className="w-2 h-2 bg-[#62C454] rounded-full md:w-[10px] md:h-[10px]" />
        </div>
        <a href={url} target="_blank">{fileName}</a>
      </div>
      <div className="rounded-3xl rounded-t-none bg-white dark:bg-[#f0f0e0] overflow-x-auto text-gray-800 text-xs md:text-sm px-3 py-0">
        {children}
      </div>
    </div>
  );
};

export default WindowAlike;
