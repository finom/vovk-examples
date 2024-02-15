import { BasicController } from 'vovk-client';
import { headers } from 'next/headers';

export default async function ServerComponentExample() {
  const serverResponse = await BasicController.getHello();

  return <div>{serverResponse.greeting}</div>;
}
