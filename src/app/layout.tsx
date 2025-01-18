import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import HomeLink from '@/components/HomeLink';
import VovkLogo from '@/components/VovkLogo';
import Nav from '@/components/Nav';

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
        <Nav />
        <div className="p-6 max-w-[90rem] mx-auto">{children}</div>
      </body>
    </html>
  );
}
