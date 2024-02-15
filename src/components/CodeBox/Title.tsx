import Link from 'next/link';

interface Props {
  href: string;
  children: string;
}

const Title = ({ href, children }: Props) => {
  return (
    <Link href={href} className="bg-gray-950 text-white p-[3px] flex items-center justify-between w-full py-1">
      <div className="flex gap-[4px] ml-[8px]">
        <div className="rounded-full h-[0.8em] w-[0.8em] bg-white opacity-20" />
        <div className="rounded-full h-[0.8em] w-[0.8em] bg-white opacity-20" />
        <div className="rounded-full h-[0.8em] w-[0.8em] bg-white opacity-20" />
      </div>
      <span className="opacity-80">{children}</span>
      <div className="w-[45px]" />
    </Link>
  );
};

export default Title;
