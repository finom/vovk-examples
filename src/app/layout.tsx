import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TopNav from '@/components/TopNav';
import HomeLink from '@/components/HomeLink';
import VovkLogo from '@/components/VovkLogo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://vovk-examples.vercel.app'),
  title: {
    template: '%s | Vovk.ts Examples',
    default: 'Vovk.ts Examples',
  },
  description: 'Vovk.ts examples for HTTP requests, response streaming with OpenAI, Web Worker and more.',
  openGraph: {
    title: 'Vovk.ts Examples',
    description: 'Vovk.ts examples for HTTP requests, response streaming with OpenAI, Web Worker and more.',
    url: 'https://vovk-examples.vercel.app/',
    type: 'website',
    images: 'https://vovk-examples.vercel.app/og/index-og.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.className} dark:text-white text-neutral-950`}>
        <header className="flex justify-between px-6 py-4 items-start">
          <div className="flex gap-2">
            <div className="flex flex-col">
              <a href="https://vovk.dev" className="text-current hover:text-current">
                <VovkLogo width={150} />
              </a>
              <div>
                <HomeLink />
              </div>
            </div>
          </div>
          <TopNav />
        </header>
        <div className="p-6">{children}</div>
      </body>
    </html>
  );
}
