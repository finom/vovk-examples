// @ts-check
/** @type {import('vovk').VovkConfig} */
const config = {
  // you can use NEXT_PUBLIC_VERCEL_URL env var for preview deployments on Vercel
  origin: process.env.VERCEL_ENV
    ? `https://vovk-examples.vercel.app`
    : 'http://localhost:' + (process.env.PORT ?? 3000),
  imports: {
    createRPC: 'vovk-react-query',
    validateOnClient: 'vovk-ajv',
  },
  bundle: {
    readme: {
      banner: `<p align="center"> 
  <picture>
    <source width="300" media="(prefers-color-scheme: dark)" srcset="https://vovk.dev/vovk-logo-white.svg">
    <source width="300" media="(prefers-color-scheme: light)" srcset="https://vovk.dev/vovk-logo.svg">
    <img width="300" alt="vovk" src="https://vovk.dev/vovk-logo.svg">
  </picture><br>
  <strong>RESTful + RPC = ♥️</strong>
</p>

<p align="center">
  Back-end meta-framework for <a href="https://nextjs.org/docs/app">Next.js</a>
</p>`,
    },
  },
  emitConfig: true,
  logLevel: 'debug',
};

export default config;
