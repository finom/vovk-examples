import type { ImageResponseOptions } from 'next/server';

/* eslint-disable @next/next/no-img-element */
const path = process.env.VERCEL_ENV ? `https://vovk-examples.vercel.app/` : `http://localhost:${process.env.PORT}/`;

interface Props {
  title: string;
}

export default function ExampleOg({ title }: Props) {
  const logoSize = 2.3;
  const bgSize = 1.29;
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
        gap: '0',
        paddingTop: '20px',
        paddingBottom: '10px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'black',
        backgroundImage: 'linear-gradient(#00000010 0%, #ffffff13 100%)',
      }}
    >
      <img
        src={`${path}og-code.png`}
        alt=""
        width={1206 * bgSize}
        height={648 * bgSize}
        style={{
          position: 'absolute',
          opacity: 0.11,
          left: '-85px',
          top: '-90px',
          transform: 'rotate(-5deg)',
        }}
      />
      <img
        src={`https://vovk.dev/vovk-logo-white.svg`}
        alt=""
        width={320 * logoSize}
        height={92 * logoSize}
        style={{ marginBottom: '0px' }}
      />
      <h1
        style={{
          color: '#fff',
          opacity: 0.6,
          fontSize: '55px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '60px',
          fontFamily: 'InterSemibold, sans-serif',
        }}
      >
        {' '}
        RESTful + RPC = ♥️
      </h1>
      <p
        style={{
          fontSize: '60px',
          textAlign: 'center',
          marginBottom: '0px',
          color: '#fff',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {title}
      </p>
    </div>
  );
}

export const getOgFonts = async () => ({
  fonts: [
    {
      name: 'InterSemibold',
      data: await (
        await fetch(new URL(`../../fonts/Inter/static/Inter_24pt-SemiBold.ttf`, import.meta.url))
      ).arrayBuffer(),
      style: 'normal',
      weight: 400,
    },
    {
      name: 'Inter',
      data: await (
        await fetch(new URL(`../../fonts/Inter/static/Inter_24pt-Light.ttf`, import.meta.url))
      ).arrayBuffer(),
      style: 'normal',
      weight: 400,
    },
  ] as ImageResponseOptions['fonts'],
});
