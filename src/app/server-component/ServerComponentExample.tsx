import { BasicController } from '@vovkts/client';
import { headers } from 'next/headers';

function getPrefix() {
  if (typeof window !== 'undefined') return '/api';
  const vc = process.env.VERCEL_URL;
  if (vc) return `https://${vc}/api`;
  return `http://${headers().get('host')}/api`;
}

export default async function ServerComponentExample() {
  const serverResponse = await BasicController.getHello({
    prefix: getPrefix(),
  });

  return <div>{serverResponse.greeting}</div>;
}
