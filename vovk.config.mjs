// @ts-check
/** @type {import('vovk').VovkConfig} */
const config = {
  outputConfig: {
    imports: {
      validateOnClient: 'vovk-ajv',
    },
  },
  /* bundle: {
    keepPrebundleDir: true,
    tsdownBuildOptions: {
      tsconfig: './tsconfig.bundle.json',
    },
    outputConfig: {
      origin: 'https://examples.vovk.dev',
      reExports: {
        'default as ProgressiveExample': './src/app/progressive/ProgressiveExample.tsx',
        'default as JSONLinesExample': './src/app/jsonlines/JSONLinesExample.tsx',
        'default as getGithubFiles': '@/lib/getGithubFiles.ts',
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
  }, */
  logLevel: 'debug',
};

export default config;
