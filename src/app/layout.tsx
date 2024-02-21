import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TopNav from '@/components/TopNav';
import { cookies } from 'next/headers';
import VovkTextLogo from '@/components/VovkTextLogo';
import HomeLink from '@/components/HomeLink';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vovk.ts Examples',
  description: 'Vovk.ts examples for HTTP requests, response streaming with OpenAI, Web Worker and more.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = cookies().get('theme') ?? { value: 'light' };
  const isDarkMode = theme.value === 'dark';

  return (
    <html lang="en" className={isDarkMode ? 'dark' : undefined}>
      <head>
        <meta property="og:title" content={metadata.title as string} />
        <meta property="og:description" content={metadata.description as string} />
        <meta property="og:url" content="https://vovk-examples.vercel.app/" />
        <meta property="og:image" content="https://vovk-examples.vercel.app/vovk-og.png" />
        <meta property="og:type" content="website" />
      </head>
      <body className={`${inter.className} dark:text-white text-neutral-950`}>
        <header className="flex justify-between px-6 py-4 items-start">
          <div className="flex gap-2">
            <div className="flex flex-col">
              <a href="https://vovk.dev" className="text-black dark:text-white">
                <VovkTextLogo width={150} />
              </a>
              <div>
                <HomeLink />
              </div>
            </div>
          </div>
          <TopNav defaultIsDarkMode={isDarkMode} />
        </header>
        <div className="p-6">{children}</div>
      </body>
    </html>
  );
}
