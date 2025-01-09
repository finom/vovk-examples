/** @type {import('vovk-cli').VovkConfig} */
const config = {
  // you can use NEXT_PUBLIC_VERCEL_URL env var for preview deployments
  origin: process.env.VERCEL_ENV ? `https://vovk-examples.vercel.app` : `http://localhost:${process.env.PORT}`,
};

module.exports = config;
