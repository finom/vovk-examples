/** @type {import('vovk').VovkRc} */
const config = {
  // you can use NEXT_PUBLIC_VERCEL_URL env var for preview deployments
  prefix: process.env.VERCEL_ENV ? `https://vovk-examples.vercel.app/api` : `http://localhost:${process.env.PORT}/api`,
};

module.exports = config;
