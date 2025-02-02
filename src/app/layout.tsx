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
    template: '%s | Vovk.ts examples',
    default: 'Vovk.ts examples',
  },
  description: 'Vovk.ts examples',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/icon.svg',
        href: '/icon.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/icon-white.svg',
        href: '/icon-white.svg',
      },
    ],
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
