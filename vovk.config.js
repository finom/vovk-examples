const vc = process.env.VERCEL_URL;

/** @type {import('vovk').VovkRc} */
const config = {
  prefix: vc ? `https://${vc}/api` : `http://localhost:${process.env.PORT}/api`,
};

module.exports = config;
