import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const conf = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

export default conf;
