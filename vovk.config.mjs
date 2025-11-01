// @ts-check
/** @type {import('vovk').VovkConfig} */
const config = {
  outputConfig: {
    imports: {
      validateOnClient: 'vovk-ajv',
    },
  },
  bundle: {
    keepPrebundleDir: true,
    build: async ({ entry, outDir }) => {
      console.log(process.cwd())
      const { build } = await import('tsdown');
      await build({
        entry,
        dts: true,
        format: ['cjs', 'esm'],
        hash: false,
        fixedExtension: true,
        clean: true,
        outDir,
        tsconfig: './tsconfig.bundle.json',
      });
    },
    outputConfig: {
      origin: 'https://examples.vovk.dev',
      reExports: {
        'default as ProgressiveExample': './src/app/progressive/ProgressiveExample.tsx',
        'default as JSONLinesExample': './src/app/jsonlines/JSONLinesExample.tsx',
        'default as JSONLinesResponseExample': './src/app/jsonlines-response/JSONLinesResponseExample.tsx',
        'default as PollExample': './src/app/polling/PollExample.tsx',
        'default as getGithubFiles': '@/lib/getGithubFiles.ts',
      },
      readme: {
        banner: `<p align="center">
  <a href="https://vovk.dev">
    <picture>
      <source width="300" media="(prefers-color-scheme: dark)" srcset="https://vovk.dev/vovk-logo-white.svg">
      <source width="300" media="(prefers-color-scheme: light)" srcset="https://vovk.dev/vovk-logo.svg">
      <img width="300" alt="vovk" src="https://vovk.dev/vovk-logo.svg">
    </picture>
  </a>
  <br>
  <strong>Back-end for <a href="https://nextjs.org/">Next.js</a></strong>
</p>`,
      },
      package: {
        dependencies: {
          'react-loading-skeleton': '^3.5.0',
        },
      },
    },
  },
  logLevel: 'debug',
};

export default config;
