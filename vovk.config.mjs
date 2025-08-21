// @ts-check
/** @type {import('vovk').VovkConfig} */
const config = {
  // you can use NEXT_PUBLIC_VERCEL_URL env var for preview deployments on Vercel
  origin:
    process.env.NODE_ENV === 'production'
      ? `https://vovk-examples.vercel.app`
      : 'http://localhost:' + (process.env.PORT ?? 3000),
  imports: {
    validateOnClient: 'vovk-ajv',
  },
  bundle: {
    tsdownBuildOptions: {
      tsconfig: './tsconfig.bundle.json',
    },
    reExports: {
      'default as ProgressiveExample': './src/app/progressive/ProgressiveExample',
      'default as JSONLinesExample': './src/app/jsonlines/JSONLinesExample',
      'default as getGithubFiles': '@/lib/getGithubFiles',
    },
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
    package: {
      dependencies: {
        'react-loading-skeleton': '^3.5.0',
      },
    },
  },
  emitConfig: ['clientTemplateDefs'],
  logLevel: 'debug',
};

export default config;
