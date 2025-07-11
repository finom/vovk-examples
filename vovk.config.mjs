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
  emitConfig: true,
  logLevel: 'debug',
};

export default config;
