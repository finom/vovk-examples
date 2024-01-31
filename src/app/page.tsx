'use client';
import Image from 'next/image';
import { getHello, getStreamingHello, calculatePi } from '../modules/hello/HelloState';
import { useCallback, useEffect, useRef, useState } from 'react';

/*
REMINDER: ADD DESCRIPTIOPN TO EXAMPLES
Examples:
- [x] Simple request - BasicController 
- [x] Simple request service + controller - BasicControllerWithService
- [ ] Streaming request - StreamingController
- [ ] Streaming response request - StreamingResponseController
- Worker service - WorkerService
- [x] OpenAI service - OpenAIController
- Simple form + validation - SimpleFormController
- React hook form + validation - ReactHookFormController

Other repos:
- Prisma + SQLIte or Postgres
- Expo + React Native
*/

export default function Home() {
  const [serverResponse, setServerResponse] = useState<Awaited<ReturnType<typeof getHello>> | null>(null);
  const [streamingHello, setStreamingHello] = useState('');
  const [pi, setPi] = useState(3.14);
  const isRun = useRef(false);

  const callGetHello = useCallback(async () => {
    setServerResponse(await getHello());
  }, []);

  const callGetStreamingHello = useCallback(async () => {
    for await (const { message } of getStreamingHello()) {
      setStreamingHello((v) => v + message);
    }
  }, []);

  const callCalculatePi = useCallback(async () => {
    for await (const pi of calculatePi()) {
      setPi(pi);
    }
  }, []);

  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true; // avoid double run in dev mode
    callGetHello();
    callGetStreamingHello();
    callCalculatePi();
  }, [callCalculatePi, callGetHello, callGetStreamingHello]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
          &nbsp;and&nbsp;
          <code className="font-mono font-bold">src/vovk/hello/*.ts</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 font-bold"
            href="https://github.com/finom"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Andrii Gubanov
          </a>
        </div>
      </div>

      <div className="mt-32 relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/vovk-text-logo.png"
          alt="Vovk.ts"
          width={300}
          height={100}
          priority
        />
        <p className="opacity-40 mb-2 mt-6">Framework for</p>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="flex flex-col text-left max-w-full w-[700px] m-auto  mt-12">
        <div className="flex gap-2 flex-1 flex-col items-center mb-4">
          <div className="w-1/2">Simple response:</div>
          <div className="w-1/2 font-bold">{serverResponse?.greeting ?? 'Loading...'}</div>
        </div>
        <div className="flex gap-2 flex-1 flex-col items-center mb-4">
          <div className="w-1/2">Calculating π by a Worker Service:</div>
          <div className="w-1/2 font-bold">{pi}</div>
        </div>
        <div className="flex gap-2 flex-1 flex-col items-center">
          <div className="w-1/2">Streaming response:</div>
          <div className="w-1/2 font-bold min-h-40">{streamingHello}</div>
        </div>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Next.js Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn Next.js{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vovk.dev"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Vovk Website{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Check the core points of Vovk.ts framework and how it works.
          </p>
        </a>

        <a
          href="https://docs.vovk.dev"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Vovk Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn Vovk.ts in a step-by-step guide with code samples.
          </p>
        </a>
      </div>
    </main>
  );
}
