const vc = process.env.NEXT_PUBLIC_VERCEL_URL;

/** @type {import('vovk').VovkRc} */
const config = {
  prefix: vc ? `https://${vc}/api` : `http://localhost:${process.env.PORT}/api`,
};

module.exports = config;
