import { BasicController } from 'vovk-client';

export default async function ServerComponentExample() {
  const serverResponse = await BasicController.getHello();

  return <div>{serverResponse.greeting}</div>;
}
