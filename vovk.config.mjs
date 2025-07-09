/** @type {import('vovk').VovkConfig} */
const config = {
  // you can use NEXT_PUBLIC_VERCEL_URL env var for preview deployments
  origin: process.env.VERCEL_ENV ? `https://vovk-examples.vercel.app` : '',
  imports: {
    createRPC: 'vovk-react-query',
    validateOnClient: 'vovk-ajv',
  },
  emitConfig: true,
};

export default config;
